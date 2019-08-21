const User = (sequelize, DataTypes) => sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password_hash: DataTypes.STRING,
  provider: DataTypes.BOOLEAN
})

export default User;