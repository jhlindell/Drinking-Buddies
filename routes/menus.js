'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/menu_query');

//get menu by menu id. id is not optional
router.get('/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

//get menu by user id
router.get('/user/:id', (req, res, next) => {
  queries.getUserMenuList(req.params.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
