'use strict';
const express = require('express');
const router = express.Router();
const knex = require('knex');
const queries = require('../queries/user_query');
const bcrypt = require ('bcrypt');
const saltRounds = 10;

router.post('*', (req,res,next) => {
  let body = req.body;

  bcrypt.hash(body.password,saltRounds, (err, hash)=>{
    console.log('hash')
    // knex.insert({
    //   username: body.username,
    //   full_name: body.full_name,
    //   email: body.email,
    //   hashed_password: hash,
    //   birthday: body.birthday
    // })
    // .into('users')
    // .returning('*')
    // .then((response)=>{
    //   res.del(response.hashed_password);
    //   console.log(response);
    //   res.send(response[0]);
    // });
  });
});

router.get('/:id', (req,res,next) => {

});
