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

app.use(bodyParser.json());
app.use(cookieParser());

//app.use('users', users);

// app.use(function (req,res,next) {
//   if (req.cookies.token) {
//     jwt.verify(req.cookies.token, process.env.JWT_SECRET, function (err,decoded) {
//       if (err) {
//         res.clearCookie('token');
//         return next(err);
//       }
//       req.user = decoded;
//       next();
//     });
//   } else {
//     return res.redirect('/index.html');
//   }
// });

app.use(express.static(path.join('public')));

app.use('/api/stockitems', stockitems);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log("listening on port" + port);
});
