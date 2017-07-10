'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/si_query');

router.get('/:id?', (req, res, next) => {
  let id = req.params.id;
  var keyword;
  if(id){
    keyword = 'internal';
  }
  queries.getStock(id, keyword)
    .then(result => {
    res.send(result);
    })
    .catch(err => {
      next(err);
    });
});

//search by name from db
router.post('/search', (req,res,next) => {
  let id = req.body.term;
  let keyword = req.body.toggle;
  queries.getStock(id, keyword)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    next(err);
  });

});

//post a stock item to db
router.post('/', (req,res,next) => {
  var si = req.body;
  knex('stock_items')
    .select('stock_items.name')
    .where('stock_items.name', '=', si.name)
    .then(result=>{
      if(result.length === 0){
        knex('stock_items')
        .insert(si)
        .then(result=>{
          res.send(si);
        });
      } else {
        res.sendStatus(400);
      }
    });
});

module.exports = router;
