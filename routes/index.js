const routes = require('express').Router();
const jokes = require('../controllers/');

/*
routes.get('/', (req, res) => {
  res.send('Entraste Sergio Bravo');
});*/
routes.get('/',jokes.displayJoke);

module.exports = routes;