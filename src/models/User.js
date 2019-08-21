import bcrypt from 'bcryptjs';

export default function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  }, /*{
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await gerarHash(user.password);
        }
      }
    }
  }*/)
  User.beforeSave(async user => {
    if (user.password) {
      user.password_hash = await gerarHash(user.password);
    }  
  })
  
  User.prototype.checkPassword = async function(password) {
    return await bcrypt.compare(password, this.password_hash);
  }

  return User;
}

async function gerarHash(password) {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
}