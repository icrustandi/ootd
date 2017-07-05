const qs = require('querystring');
const request = require('request');
const models = require('./../models/index.js');

const clothingItemController = {};

clothingItemController.createItem = (req, res) => {
  // Create a user
  console.log(req.body)
  models.ClothingItem.create(req.body).then((clothingItem) => {
    res.json(clothingItem);
  });
};

module.exports = clothingItemController;
