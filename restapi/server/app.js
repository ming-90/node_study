require('dotenv').config()

import createError from 'http-errors'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import signRouter from './routes/v2/signRoute'
import crawlingRouter from './routes/v2/crawlingRoute'
import db from './config/DB/DB_connect'
import cors from 'cors'
//var cors = require('cors')

//CONNECT TO MONGODB SERVER
db.dbconnection();
 
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//회원가입,로그인 관련 api
app.use('/api', cors(), signRouter);
//크롤링 관련 api
app.use('/crawling', crawlingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
