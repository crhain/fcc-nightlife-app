const express = require('express');
const router = express.Router();
const {requireLogin, requireLoggedout} = require('../auth');
const keys = require('../config/keys');
const debug = require('debug')('app:bars-routes');

const yelp = require('yelp-fusion');


const apiKey = keys.yelpAPIKey;

router.get('/', (req, res) => {
    res.send('This the yelp index route!');
});

// const searchRequest = {
//   term:'Four Barrel Coffee',
//   location: 'san francisco, ca'
// };

// const client = yelp.client(apiKey);

// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });


module.exports = router;