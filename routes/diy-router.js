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


router.get('/diys/new', (req, res, next) => {
  res.render('diy-views/diy-form.ejs');
});

router.post('/diys',
  // myUploader.single('diyFinalImg'),
  myUploader
  // .any(),
  .fields([
    { name: 'stepImg'},
    { name: 'diyImg'}
  ]),
  (req, res, next) => {
  console.log('show meeee step title ----->' + req.body.stepTitle);
  console.log('show meeee step desc ----->' + req.body.stepDesc);
  console.log(req.files);

  const theDIY = new DiyModel({
    title: req.body.diyTitle,
    description: req.body.diyDesc,
    diyFinalImg: '/uploads/' + req.files.diyImg[0].filename,
    owner: req.user._id
  });

    for( i = 0; i < req.body.stepTitle.length ; i++){
      theDIY.steps[i] = {
        stepTitle: req.body.stepTitle[i],
        stepDesc: req.body.stepDesc[i],
        stepImage: '/uploads/' + req.files.stepImg[i].filename
      };
    }

  theDIY.save((err) => {
    if (err){
      console.log(err);
      next(err);
      return;
    }
    res.redirect('/user-home');

  });
});

router.get('/diys/:diyId', (req, res, next) =>{
  DiyModel.findById(
    req.params.diyId,
    (err, dbDIY) => {
      if(err){
        next(err);
        return;
      }
      res.locals.diyInfo = dbDIY;
      res.locals.listOfDiys = dbDIY;
      console.log(dbDIY);
      res.render('diy-views/diy-view.ejs');
    }
  );
});

router.get('/diys/:diyId/edit', (req, res, next) => {
  DiyModel.findById(
    req.params.diyId,
    (err, dbDIY) => {
      if (err){
        next(err);
        return;
      }
      res.locals.diyInfo = dbDIY;
      res.render('diy-views/edit-diy.ejs');
    }
  );
});

// router.post('diys/:diyId',
//   // myUploader.single('diyFinalImg'),
//   myUploader
//   // .any(),
//   .fields([
//     { name: 'stepImg'},
//     { name: 'diyImg'}
//   ]),
//
//   (err, dbDIY) => {
//     if(err) {
//       next(err);
//       return;
//     }
//
//     title: req.body.diyTitle,
//     description: req.body.diyDesc,
//     diyFinalImg: '/uploads/' + req.files.diyImg[0].filename,
//     owner: req.user._id
//   });
//
//     for( i = 0; i < req.body.stepTitle.length ; i++){
//       theDIY.steps[i] = {
//         stepTitle: req.body.stepTitle[i],
//         stepDesc: req.body.stepDesc[i],
//         stepImage: '/uploads/' + req.files.stepImg[i].filename
//       };
//     }
//
//   }
//
//   )

router.get('/diys/search', (req, res, next) => {
    res.render('diy-search.ejs');
});

router.get('/diys/search-results', (req, res, next) => {
    const mySearchRegex = new RegExp(req.query.searchTerm, 'i');


    DiyModel.find(
      { name: mySearchRegex },


      (err, searchResults) => {
        if (err) {
            next(err);
            return;
        }

        res.locals.listOfResults = searchResults;
        res.locals.lastSearch = req.query.searchTerm;
        res.render('search-results.ejs');
      }
    );
});


router.post('/diys/:diyId/delete', (req, res, next) => {
  DiyModel.findByIdAndRemove(
    req.params.diyId,

    (err, diyInfo) => {
      if(err) {
        next(err);
        return;
      }
      res.redirect('/user-home');
    }
  );
});

module.exports = router;
