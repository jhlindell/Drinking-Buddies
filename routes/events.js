'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/event_query');

//get single event by event id
router.get('/:id', (req, res, next) => {
  queries.get(req.params.id)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

//get list of user's events by user id
router.get('/user/:id', (req, res, next) => {
  queries.getUserEventList(req.params.id)
  .then(result => {
    console.log(result);
    res.send(result);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
