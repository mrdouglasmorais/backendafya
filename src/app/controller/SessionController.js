import jwt from 'jsonwebtoken';

import User from '../models/User';
import Notifications from '../schema/Notifications'
import authConfig from '../../config/auth';

class SessionController{
  async store(req, res){
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }})

    if (!user){
      return res.status(401).json({ erro: 'Usuário não cadastrado' })
    }

    if (!(await user.checkPassword(password))){
      return res.status(401).json({ erro: 'Senha não confere'})
    }

    const {id, name} = user

    const LoginNotify = await Notifications.create({
      content: `usuário ${name} está logado`,
      user: id,
    })


    return res.status(200).json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id, name, email }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
      LoginNotify
    })
  }
}

export default new SessionController();