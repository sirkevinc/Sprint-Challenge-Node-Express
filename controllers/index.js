const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;
const STATUS_ERROR = 422;

const { getCurrentPrice, getYesterdayPrice, getDifference } = require('../models/index');

router.get('/compare', (req, res) => {
  let currentPrice = 2000;
  let yesterdayPrice = 4000;
  getDifference(currentPrice, yesterdayPrice)
    .then(difference => {
      res.status(STATUS_SUCCESS)
      res.send({ PriceDifference: difference })
    })
    .catch(err => {
      res.status(STATUS_ERROR);
      res.send({ err: err });
    });
})

module.exports = router;