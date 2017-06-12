'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/si_query');

router.get('*', (req, res, next) => {
  console.log('got a request');
  next();
});

router.get('/api/stockitems', (req, res, next) => {
  queries.list()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
