import Sequelize from 'sequelize';
import dbconfig from '../config/database';

const sequelize = new Sequelize(dbconfig);
const User = sequelize.import('../models/User');
const File = sequelize.import('../models/File');
const Appointment = sequelize.import('../models/Appointment');

const { models } = sequelize;
Object.keys(models).forEach(model => {
    if ('associate' in models[model]) {
        models[model].associate(models);
    }
})

export { User, File, Appointment };