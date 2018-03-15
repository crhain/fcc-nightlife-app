const express = require('express');
const router = express.Router();
const {requireLogin, requireLoggedout} = require('../auth');
const debug = require('debug')('app:bars-routes');

const Bars = require('../models/Bars');

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('This the bars index route!');
});

router.get('/search/:city', requireLogin, async (req, res) => {
  const sample = await Sample.find({})
    .catch(err => {
      debug(err);
      res.send({});
    });
  res.send(sample);
});

router.get('/search/:id', requireLogin, async (req, res) => {
  const sample = await Sample.find({})
    .catch(err => {
      debug(err);
      res.send({});
    });
  res.send(sample);
});

router.post('/sample', (req, res) => {
  const { title, author, text } = req.body;
  const sample = new Sample({
    title,
    author,
    text
  })
  .save()
  .catch( err => {
    debug(err);
  });
});

module.exports = router;