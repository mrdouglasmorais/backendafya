"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController{
  async store(req, res){
    const { name, email } = await _User2.default.create(req.body)

    return res.status(200).json({name, email})
  }

  async index(req, res){
    return res.status(200).json({message: 'Passou!!!'})
  }
}

exports. default = new UserController();