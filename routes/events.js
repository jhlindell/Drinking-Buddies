'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/event_query');

router.get('/:id', (req, res, next) => {
  queries.get(req.params.id)
  .then(result => {
    console.log(result);
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
