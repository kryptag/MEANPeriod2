var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes')

router.get('/', function(req, res, next){
  res.render('index', {title: 'Express'})
});
router.get('/joke', function(req, res, next){
  res.render('joke', {joke: jokes.getRandomJoke()})
});
router.get('/jokes', function(req, res, next){
  res.render('jokes', {jokes: jokes.allJokes})
});
router.get('/addjoke', function(req, res, next){
  res.render('addjoke', {addjoke: jokes.addJoke()});
});

module.exports = router;