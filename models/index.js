const fetch = require('node-fetch');
const moment = require('moment');

const currentPriceUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const yesterdayPriceUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';
const yesterdayDate = moment().add(-1, 'd').format("YYYY-MM-DD");

function getCurrentPrice() {
  return new Promise((resolve, reject) => {
    fetch(currentPriceUrl)
      .then(currentPriceRes => currentPriceRes.json())
      .then(currentPriceRes => currentPriceRes.bpi.USD.rate_float)
      .then(currentPrice => {
        console.log('getcurrentpri', currentPrice)
        resolve(currentPrice);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getYesterdayPrice() {
  return new Promise((resolve, reject) => {
    fetch(yesterdayPriceUrl)
      .then(yesterdayPriceRes => yesterdayPriceRes.json())
      .then(yesterdayPriceRes => yesterdayPriceRes.bpi[yesterdayDate])
      .then(yesterdayPrice => {
        console.log('getYesterday', yesterdayPrice);
        resolve(yesterdayPrice);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getDifference(currentPrice, yesterdayPrice) {
  return currentPrice - yesterdayPrice;
}

module.exports = {
  getCurrentPrice,
  getYesterdayPrice,
  getDifference
}