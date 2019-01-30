const axios = require('axios');
const { PUBGTOKEN } = require('../secret');

const pubg = axios.create({
  baseURL: 'https://api.pubg.com/shards/steam',
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${PUBGTOKEN}` || process.env.PUBGTOKEN,
    Accept: 'application/vnd.api+json'
  }
});

module.exports = pubg;
