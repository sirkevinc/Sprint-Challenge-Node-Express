const express = require('express');
const fetch = require('node-fetch');
const moment = require('moment');
const PORT = 3030;

const app = express();

const currentPriceUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const yesterdayPriceUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';
const yesterdayDate = moment().add(-1, 'd').format("YYYY-MM-DD");

app.get('/compare', (req, res) => {
})


app.listen(PORT, err => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Server Listening on Port: ', PORT);
  }
})