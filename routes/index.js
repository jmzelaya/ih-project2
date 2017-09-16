const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');

  res.locals.currentUser = req.user;

  if(req.user){
    res.render('user-home.ejs');
  }

  else{
    res.locals.signupFeedback = req.flash('signupSuccess');
    res.render('index');
  }


});

module.exports = router;
