const uuid = require('uuid')

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users',{
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    encrypted_password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    }
  })

  Users.beforeCreate(user => user.id = uuid.v4())

  Users.associate = function(models) {
    Users.belongsTo(models.Roles)
  }

  return Users
}
