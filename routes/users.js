'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');
const queries = require('../queries/user_query');
const bcrypt = require ('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

router.get('/', (req,res,next)=>{
  jwt.verify(req.cookies.token, process.env.JWT_KEY, function (err,decoded) {
    if (err) {
      res.clearCookie('token');
      return next(err);
    }
    req.user = decoded;
    res.send(req.user);
  });
});

router.post('/register', (req,res,next) => {
  let body = req.body;
  console.log(body);

  bcrypt.hash(body.password, saltRounds, (err, hash)=>{
    knex.insert({
      username: body.username,
      full_name: body.full_name,
      email: body.email,
      hashed_password: hash,
      birthday: body.birthday
    })
    .into('users')
    .returning('*')
    .then((response)=>{
      delete response.hashed_password;
      res.send(response[0]);
    });
  });
});

router.post('/login', (req,res,next) => {
    let body = req.body;
    let username = body.username;
    let password = body.password;

    knex('users')
    .select('id', 'username', 'hashed_password', 'full_name', 'email')
    .where('username', username)
    .then((data) => {
      if(data.length === 0){
        res.setHeader('content-type', 'text/plain');
        return res.status(400).send('Bad username or password');
      } else if (bcrypt.compareSync(password, data[0].hashed_password)){
        let user = {
          id: data[0].id,
          username: data[0].username,
          full_name: data[0].full_name,
          email: data[0].email
        };
        var token = jwt.sign(user, process.env.JWT_KEY);
        res.cookie('token', token, {httpOnly: true});
        return res.sendStatus(200);
      } else {
        res.setHeader('content-type', 'text/plain');
        return res.status(400).send('Bad username or password');
      }
    });
});

router.get('/', (req,res,next)=>{
  jwt.verify(req.cookies.token, process.env.JWT_KEY, function (err,decoded) {
    if (err) {
      res.clearCookie('token');
      return next(err);
    }
    req.user = decoded;
    res.send(req.user);
  });
});

module.exports = router;
