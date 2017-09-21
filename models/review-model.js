const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const reviewSchema = new Schema({

    content: { type: String },

    stars: {
      type: Number,
      required: [true, 'Please rate the product'],
      min: [1, 'The minimum rating is 1'],
      max: [5, 'Your rating cannot be more than 5']
    },

    author: {
      type: String,
      required: [true, 'You must provide your email'],
      //shortest email: "a@a.co"
      minlength: [6, 'Your email is too short. it must be at least 6 characters long'],
      //REGULAR EXPRESSION FOR "stuff@stuff.stuff"
      match: [/.+@.+\..+/, 'Your email does not match the correct format example@example.com']
    }


});


const ReviewModel = mongoose.model('Review', reviewSchema);


module.exports = ReviewModel;
