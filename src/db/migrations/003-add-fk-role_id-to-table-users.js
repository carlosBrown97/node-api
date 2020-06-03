'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'RoleId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'RoleId');
  }
};

