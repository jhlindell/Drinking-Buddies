'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/recipe_query');

router.get('/:id?', (req, res, next) => {
  queries.get(req.params.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
