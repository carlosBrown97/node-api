const uuid = require('uuid')

module.exports = (sequelize, DataTypes) => {
	const Roles = sequelize.define('Roles', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	})

  Roles.beforeCreate(role => role.id = uuid.v4())

  Roles.associate = function(models) {
    Roles.hasMany(models.Users)
  }

	return Roles
}

