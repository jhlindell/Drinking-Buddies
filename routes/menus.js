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

router.post('/', (req, res, next) => {
  let body = req.body;
  knex.insert({
    menu_id: body.menuId,
    recipe_id: body.recipeId
  })
  .into('menu_items')
  .returning('*')
  .then((response)=>{
    res.send('Recipe added to menu!');
  })
  .catch((response)=>{
    res.send('This recipe is already in that menu.');
  });
});

module.exports = router;
