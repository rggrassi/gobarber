import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize'

const index = async ({ Appointment, User }, req, res) => {
  const isProvider = User.findOne({
    where: { id: req.user.id, provider: true }
  })

  if (!isProvider) {
    return res.status(401).json({ error: 'User is not provider.' })
  }

  const parseDate = parseISO(req.query.date);

  const appointments = await Appointment.findAll({
    where: {
      provider_id: req.user.id,
      canceled_at: null,
      date: {
        [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)]
      }
    },
    order: ['date']
  })

  return res.json(appointments);
}

export default { index }