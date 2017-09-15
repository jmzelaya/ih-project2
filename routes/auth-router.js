const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const UserModel = require('../models/user-model.js');

const router = express.Router();

router.get('/signup', (req, res, next) => {

  if(req.user){
    res.redirect('/');
    return;
  }

  res.render('auth-views/signup-form.ejs');
});

router.post('/process-signup', (req, res, next) => {
  if(req.body.signUpEmail === "" || req.body.signUpPass === ""){
    //Add feedback message to let user know
    //that they need to input BOTH values
    res.render('auth-views/signup-form.ejs');
    return;
  }

  UserModel.findOne(
    { email: req.body.signupEmail },
    (err, userFromDb) => {
        if(err){
          next(err);
          return;
        }

        if(userFromDb){
          //Add feedback message so user knows
          //that the email already exists
          res.render('auth-views/signup-form.ejs');
          return;
        }

        const salt = bcrypt.genSaltSync(10);
        const scrambledPass = bcrypt.hashSync(req.body.signupPass, salt);

        const theUser = new UserModel({
            email: req.body.signupEmail,
            encryptedpassword: scrambledPass
        });

        theUser.save((err) => {
          if (err) {
            console.log(err);
            next(err);
            return;
          }
          //Give user feedback that they have signed up successfully
          res.redirect('/');
        });
    }
  );
});

router.get('/login', (req, res, next) => {
    if(req.user){
      res.redirect('/');
      return;
    }
    res.render('auth-views/login-form.ejs');
});

router.post('/process-login',
  passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/signup',
      // failureFlash:true
  })
);

module.exports = router;
