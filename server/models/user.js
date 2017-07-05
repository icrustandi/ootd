'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.ClothingItem);
  };

  return User;
};
