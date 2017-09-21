const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');

//session related npm packages
const session      = require('express-session');
const passport     = require('passport');
const flash        = require('connect-flash');

require('dotenv').config();

require('./config/passport-config.js');

//***DON'T FORGET TO CHANGE THIS BEFORE DEPLOYING****
mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'iDIY - A home for everything DIY';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//List of Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

app.use(session(
  {
    secret: 'for my 2nd project',
    resave: true,
    saveUninitialized: true
  }
));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//currentUser defined below ------------------
app.use((req, res, next) => {
  if (req.user){
      res.locals.currentUser = req.user;
  }

  else {
    res.locals.currentUser = null;
  }
  //"next" prevents hang
  next();
});


//ROUTES GO HERE -----------------------------
const index = require('./routes/index');
app.use('/', index);

const myAuthRouter = require('./routes/auth-router.js');
app.use(myAuthRouter);

const myUserRouter = require('./routes/user-router.js');
app.use(myUserRouter);

const myDiyRouter = require('./routes/diy-router.js');
app.use(myDiyRouter);

const myReviewRouter = require('./routes/review-router.js');
app.use(myReviewRouter);

//ROUTES END ---------------------------------

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
