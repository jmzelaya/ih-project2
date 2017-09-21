const express = require('express');
const router  = express.Router();
const DiyModel = require('../models/diy-model.js');


/* GET home page. */
router.get('/', (req, res, next) => {

  res.locals.currentUser = req.user;

  // if(req.user){
  //   res.render('user-home.ejs');
  // }
  //
  // else{
  //   res.locals.signupFeedback = req.flash('signupSuccess');
  //   res.render('index');
  // }

  DiyModel.find((err, allDiys) =>{
      if (err) {
        next(err);
        return;
      }
      res.locals.listOfDiys = allDiys;
      res.render('index');
    }
  );


});

module.exports = router;
