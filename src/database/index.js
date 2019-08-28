import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import dbconfig from '../config/database';

const sequelize = new Sequelize(dbconfig);
const User = sequelize.import('../models/User');
const File = sequelize.import('../models/File');
const Appointment = sequelize.import('../models/Appointment');
/**
 * Define the relationship between the models
 */
const { models } = sequelize;
Object.keys(models).forEach(model => {
    if ('associate' in models[model]) {
        models[model].associate(models);
    }
})

/**
 * Define mongo's database
 */
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useFindAndModify: true
})

export { User, File, Appointment };