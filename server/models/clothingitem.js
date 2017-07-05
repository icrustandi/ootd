'use strict';
module.exports = function(sequelize, DataTypes) {
  var ClothingItem = sequelize.define('ClothingItem', {
    userId: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    worn: {
      type: DataTypes.DATE,
    },
    washed: {
      type: DataTypes.DATE,
    },
  });
  ClothingItem.associate = function (models) {
    // associations can be defined here
    ClothingItem.belongsTo(models.User);
  };
  return ClothingItem;
};