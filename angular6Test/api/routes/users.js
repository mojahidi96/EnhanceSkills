var express = require('express');
var router = express.Router();
var states = require('../public/javascripts/states_titlecase.json');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/states', function (req, res, next) {
  console.log('states');
  res.send(states);
});
module.exports = router;
