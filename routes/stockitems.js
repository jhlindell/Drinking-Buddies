'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/si_query');

router.get('/:id?', (req, res, next) => {
  queries.get(req.params.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

//post a search by name to db
router.post('/search', (req,res,next) => {
  console.log(req.body);
});

//post a stock item to db
router.post('/', (req,res,next) => {

});

module.exports = router;
