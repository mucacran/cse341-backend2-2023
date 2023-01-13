const express = require('express');
const bodyParse = require('body-parser');
//const mongodb = require('./db/connect');


const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})