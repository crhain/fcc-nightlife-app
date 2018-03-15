const express = require('express');
const router = express.Router();
const {requireLogin, requireLoggedout} = require('../auth');
const keys = require('../config/keys');
const debug = require('debug')('app:bars-routes');

const yelp = require('yelp-fusion');


const apiKey = keys.yelpAPIKey;

router.get('/', async (req, res) => {
    // res.send('This the yelp index route!');
    //get search request from req.params.city : ?city=[cityname]
    //and convert to lowercase
    const location = 'palatine, il';

    //create search request using location
    const searchRequest = {
        categories: 'bars',
        location
    };

    //intialize search client
    const client = yelp.client(apiKey);

    //make search
    const response = await client.search(searchRequest)
        .catch(err => {
            debug(err);
        });
    
    const results = response.jsonBody.businesses;
    // const prettyJson = JSON.stringify(results);
    
    res.send(results);

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