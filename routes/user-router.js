const express = require('express');

const router = express.Router();


router.get('/user-home', (req, res, next) => {
  res.render('user-home.ejs');
});



module.exports = router;


//WHY DID I HAVE TO PUT ROUTER HERE?
