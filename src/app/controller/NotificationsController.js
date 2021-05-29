import Notification from '../schema/Notifications';

class NotificationsController{
  async index(req, res){
    
    const notification = await Notification.find({
      user: req.userId
    })

    return res.json(notification)
  }

  async update(req, res){
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    )

    return res.json(notification)
  }

}

export default new NotificationsController();