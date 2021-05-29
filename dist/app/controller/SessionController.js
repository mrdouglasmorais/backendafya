"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Notifications = require('../schema/Notifications'); var _Notifications2 = _interopRequireDefault(_Notifications);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

class SessionController{
  async store(req, res){
    const { email, password } = req.body;

    const user = await _User2.default.findOne({ where: { email }})

    if (!user){
      return res.status(401).json({ erro: 'Usuário não cadastrado' })
    }

    if (!(await user.checkPassword(password))){
      return res.status(401).json({ erro: 'Senha não confere'})
    }

    const {id, name} = user

    const LoginNotify = await _Notifications2.default.create({
      content: `usuário ${name} está logado`,
      user: id,
    })


    return res.status(200).json({
      user: {
        id,
        name,
        email
      },
      token: _jsonwebtoken2.default.sign({ id, name }, _auth2.default.secret, {
        expiresIn: _auth2.default.expiresIn,
      }),
      LoginNotify
    })
  }
}

exports. default = new SessionController();