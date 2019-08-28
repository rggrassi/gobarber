import { isBefore, subHours } from 'date-fns';

export default function(sequelize, DataTypes) {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE,
    canceled_at: DataTypes.DATE,
    past: { 
      type: DataTypes.VIRTUAL,
      get() {
        return isBefore(this.date, new Date())
      }
    },
    cancelable: {
      type: DataTypes.VIRTUAL,
      get() {
        return isBefore(new Date(), subHours(this.date, 2))
      }
    }
  })  
  
  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    Appointment.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }

  return Appointment;
}