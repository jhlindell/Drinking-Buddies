'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/recipe_query');

router.get('/:id?', (req, res, next) => {
  let id = req.params.id;
  var keyword;
  if(id){
    keyword = 'internal';
  }
  queries.getList(id, keyword)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

router.post('/search', (req,res,next) => {
  let id = req.body.id;
  let keyword = 'name';
  queries.getList(id, keyword)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });

});

router.post('/', (req,res,next) => {

});

module.exports = router;
