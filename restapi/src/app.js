require('dotenv').config()

import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import bodyParser from 'body-parser'
import indexRouter from './routes/v1/index'
import userRouter from './routes/v1/UserRoute'
import signRouter from './routes/v2/signRoute'
import sess from './routes/v1/sess'
import session from 'express-session'
//CONNECT TO MONGODB SERVER
 
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//세션 설정
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

//회원가입,로그인 관련 api
app.use('/api', signRouter);
//세션 정보 확인
/* app.use((req,res,next) => {
  if(req.session.userId) next();
  else{
    res.redirect("/test");
  }
}) */
//테스트 api
app.use('/user', userRouter);
app.use('/v1', indexRouter);
app.use('/sess', sess);

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
