'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('ClothingItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      brand: Sequelize.STRING,
      color: Sequelize.STRING,
      type: Sequelize.STRING,
      image: Sequelize.STRING,
      worn: Sequelize.DATE,
      washed: Sequelize.DATE,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('ClothingItems');
  }
};