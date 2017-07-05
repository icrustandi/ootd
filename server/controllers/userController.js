// const bcrypt = require('bcryptjs');
const qs = require('querystring');
const request = require('request');
const models = require('./../models/index.js');

const userController = {};

userController.createUser = (req, res) => {
  // Create a user
  console.log(req.body)
  models.User.create(req.body).then((user) => {
    res.json(user);
  });
};

module.exports = userController;
