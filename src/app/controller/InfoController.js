import Info from '../models/Info';

class InfoController{
  async store(req, res){
    const { city, address } = req.body

    const info = await Info.create({
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

export default new InfoController();