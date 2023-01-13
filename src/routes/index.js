const routes = require('express').Router();
//const jokes = require('../controllers');
const jokes = require('../db/connect.js');




routes.get('/', (req, res) => {
  res.send('Sergio Bravo');
});
routes.get('/pepe', (req, res) => {
  res.send(main().catch(console.error));
});
//routes.get('/',jokes.displayJoke);

module.exports = routes;