const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewMdoel = require('../models/review-model.js');

const reviewSchema = new Schema({

});


const ReviewModel = mongoose.model('Review', reviewSchema);

module.exports = ReviewModel;
