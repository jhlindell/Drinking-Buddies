'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/recipe_query');

router.get('/:id?', (req, res, next) => {
  console.log(typeof req.params.id);
  queries.getList(req.params.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

router.post('/search', (req,res,next) => {
  queries.getList(req.body.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });

});

module.exports = router;
