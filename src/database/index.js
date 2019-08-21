import Sequelize from 'sequelize';
import dbconfig from '../config/database';

const sequelize = new Sequelize(dbconfig);

const User = sequelize.import('../models/User');

export { User };