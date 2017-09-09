const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tutorialModel = require('../models/tutorial-model.js');

const tutorialSchema = new Schema({

});



const TutorialModel = mongoose.model('Tutorial', tutorialSchema);

module.exports = TutorialModel;
