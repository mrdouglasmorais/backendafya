"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Notifications = require('../schema/Notifications'); var _Notifications2 = _interopRequireDefault(_Notifications);

class NotificationsController{
  async index(req, res){
    
    const notification = await _Notifications2.default.find({
      user: req.userId
    })

    return res.json(notification)
  }

  async update(req, res){
    const notification = await _Notifications2.default.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    )

    return res.json(notification)
  }

}

exports. default = new NotificationsController();