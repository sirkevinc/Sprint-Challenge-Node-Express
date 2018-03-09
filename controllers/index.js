const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;
const STATUS_ERROR = 422;

const { getCurrentPrice, getYesterdayPrice } = require('../models/index');

router.get('/compare', (req, res) => {
  getCurrentPrice()
    .then(currentPrice => {
      getYesterdayPrice()
        .then(yesterdayPrice => {
          res.send({
            CurrentPrice: currentPrice,
            YesterdayPrice: yesterdayPrice,
            Difference: currentPrice - yesterdayPrice,
          })
        })
    })
})

module.exports = router;