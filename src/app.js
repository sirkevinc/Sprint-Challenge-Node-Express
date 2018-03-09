const express = require('express');
const fetch = require('node-fetch');
const PORT = 3030;

const app = express();

const currentPriceUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const yesterdayPriceUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';

app.get('/compare', (req, res) => {
})


app.listen(PORT, err => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Server Listening on Port: ', PORT);
  }
})