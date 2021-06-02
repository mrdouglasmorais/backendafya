"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Info = require('../models/Info'); var _Info2 = _interopRequireDefault(_Info);

class InfoController{
  async store(req, res){
    const { city, address } = req.body

    const info = await _Info2.default.create({
      city,
      address,
      user_id: req.userId
    })

    if (!info){
      return res.status(400).json({ message: 'Error'})
    }

    return res.status(201).json({ city, address })
  }

}

exports. default = new InfoController();