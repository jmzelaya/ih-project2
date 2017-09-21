const express = require('express');

const DiyModel = require('../models/diy-model.js');
const ReviewModel = require('../models/review-model.js');

const router =  express.Router();


router.get('/diys/:diyId/reviews/new', (req, res, next) => {
   DiyModel.findById(

    req.params.diyId,

    (err, dbDIY) => {
      if (err) {
        next(err);
        return;
      }

      //send
      res.locals.diyInfo = dbDIY;
      //if not errors..
      res.render('review-views/review-form.ejs');
    }
  );
});

router.post('/diys/:diyId/reviews', (req, res, next) => {

    DiyModel.findById(
     req.params.diyId,

     (err, dbDIY) => {
       if (err) {
           next(err);
           return;
       }

       const theReview = new ReviewModel({
         content: req.body.reviewContent,
         stars: req.body.reviewStars,
         author: req.body.reviewAuthor

       });
       dbDIY.reviews.push( theReview );

       dbDIY.save((err) => {
         if (err && dbDIY.errors) {

           res.locals.diyInfo = dbDIY;

           res.render('review-views/review-form.ejs');
           return;
         }

          res.redirect('/diys/' + dbDIY._id);
       });
     }
   );//close
});//close POST

module.exports = router;
