const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const models = require('./models/index.js');
const userController = require('./controllers/userController');
const clothingItemController = require('./controllers/clothingItemController');

app.use(express.static(__dirname +'./../')); //serves the index.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/clothes', (req, res) => {
  models.ClothingItem.findAll({where: {}}).then((clothingItems) => {
    res.json(clothingItems);
  });
});
app.post('/clothes',clothingItemController.createItem);
app.post('/users', userController.createUser);

app.listen(3001); //listens on port 3000 -> http://localhost:3000/
