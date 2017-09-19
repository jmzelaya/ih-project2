const express = require('express');
const multer  = require('multer');
const userModel = require('../models/user-model.js');
const DiyModel = require('../models/diy-model.js');
const router = express.Router();

const myUploader = multer(
    {
      dest: __dirname + '/../public/uploads/'
    }
);

router.get('/my-diys', (req, res, next) => {
  res.render('diy-views/my-diy.ejs');
});

router.get('/diys/new', (req, res, next) => {
  res.render('diy-views/diy-form.ejs');
});

router.post('/diys',
  // myUploader.single('diyFinalImg'),
  myUploader.single('stepImg'),
  (req, res, next) => {
  console.log('show meeee step title ----->' + req.body.stepTitle);
  console.log('show meeee step desc ----->' + req.body.stepDesc);

  const theDIY = new DiyModel({
    title: req.body.diyTitle,
    description: req.body.diyDesc,
    diyFinalImg: req.body.diyImg,
    steps:[{

        stepTitle: req.body.stepTitle,

        stepDesc: req.body.stepDesc,

        stepImage: '/uploads/' + req.body.stepImg

    }],
    // steps.stepImage: req.body.stepImg,
    // steps.stepDesc: req.body.stepDesc,
    owner: req.user._id
  });

  theDIY.save((err) => {
    if (err){
      console.log(err);
      next(err);
      return;
    }
    res.redirect('/my-diy');
  });
});



module.exports = router;
