import Notification from '../schemas/Notification';

const index = async (req, res) => {
  const notifications = await Notification.find({
     user: req.user.id
  }).sort({ createdAt: 'desc' }).limit(20);

  return res.json(notifications);
}

const update = async(req, res) => {
  const notification = await Notification.findByIdAndUpdate(
    req.params.id, 
    { read: true },
    { new: true }
  )

  return res.json(notification);
}

export default { index, update } 