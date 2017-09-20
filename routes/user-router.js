const express = require('express');
const DiyModel = require('../models/diy-model.js');
const router = express.Router();


router.get('/user-home', (req, res, next) => {

  DiyModel.find(
    {owner: req.user._id},

    (err, myDiys) =>{
      if (err) {
        next(err);
        return;
      }
      res.locals.listOfDiys = myDiys;
      res.render('user-home.ejs');
    }
  );

});


module.exports = router;


//WHY DID I HAVE TO PUT ROUTER HERE?
