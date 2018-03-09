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
        resolve(yesterdayPrice);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function priceDiff (currentPrice, yesterdayPrice) {
  if(currentPrice === yesterdayPrice) {
    return 'The price of bitcoin has stayed the same!'
  }
  if (currentPrice > yesterdayPrice) {
    return `The price of Bitcoin is up $${currentPrice-yesterdayPrice} from yesterday! :)`
  } else {
    return `The price of Bitcoin is down $${currentPrice-yesterdayPrice} from yesterday! :(`
  }
}

module.exports = {
  getCurrentPrice,
  getYesterdayPrice,
  priceDiff
}