const express = require('express');

const userModel = require('../models/user-model.js');
const DiyModel = require('../models/diy-model.js');
const router = express.Router();

// const myUploader = multer(
//   {
//     dest: __dirname + '/../public/uploads/'
//   }
// );
//
router.get('/diys/new', (req, res, next) => {
  res.render('diy-views/diy-form.ejs');
});

router.post('/diys',(req, res, next) => {
  const theDIY = new DiyModel({
    title: req.body.diyTitle,
    description: req.body.diyDesc,
    diyFinalImg: req.body.diyImg,
    stepTitle: req.body.stepTitle,
    stepImage: req.body.stepImg,
    stepDesc: req.body.stepDesc
  });

  theDIY.save((err) => {
    if (err){
      console.log(err);
      next(err);
      return;
    }
    res.redirect('/');
  });
});



module.exports = router;
