const express = require('express');
const priceController = require('../controllers/index');

const app = express();

const PORT = 3030;

app.use(priceController);

app.listen(PORT, err => {
  if (err) {
    console.log('Error!', err)
  } else {
    console.log('Success! Server Listening on port:', PORT);
  }
})