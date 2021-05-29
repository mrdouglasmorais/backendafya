import User from '../models/User';

class UserController{
  async store(req, res){
    const { name, email } = await User.create(req.body)

    return res.status(200).json({name, email})
  }

  async index(req, res){
    return res.status(200).json({message: 'Passou!!!'})
  }
}

export default new UserController();