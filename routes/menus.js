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

//create a menu
router.post('/create', (req, res, next) => {
  let body = req.body;
  knex.insert({
    menu_name: body.menu_name,
    user_id: req.user.id
  })
  .into('menus')
  .returning('*')
  .then((response)=>{
    res.send(response[0].menu_name);
  });
});

module.exports = router;
