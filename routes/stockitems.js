'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const queries = require('../queries/si_query');

router.get('/:id?', (req, res, next) => {
  if(req.params.id){
    queries.getStock(req.params.id, 'internal')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      next(err);
    });
  } else {
    queries.getStock()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      next(err);
    });
  }
});

//post a search by name to db
router.post('/search', (req,res,next) => {
  queries.getStock(req.body.id, req.body.toggle)
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
