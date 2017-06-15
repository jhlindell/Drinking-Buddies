'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const jwt = require('jsonwebtoken');
const users = require('./routes/users');
const stockitems = require('./routes/stockitems');
const recipes = require('./routes/recipes');
const menus = require('./routes/menus');

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', users);

app.use(express.static(path.join('public')));

app.use(function (req,res,next) {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, process.env.JWT_KEY, function (err,decoded) {
      if (err) {
        res.clearCookie('token');
        return next(err);
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.redirect('/index.html');
  }
});

app.use(express.static(path.join('secure')));

app.use('/api/stockitems', stockitems);
app.use('/api/recipes', recipes);
app.use('/api/menus', menus);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log("Now listening on port " + port);
});
