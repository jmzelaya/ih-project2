const express = require('express');

const router = express.Router();


router.get('/create-a-diy', (req, res, next) => {
  res.render('diy-views/create.ejs');
});





module.exports = router;
