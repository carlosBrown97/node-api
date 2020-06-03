'use-strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Roles', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
        allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE
			},
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Roles');
	}
}
