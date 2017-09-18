const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const tutorialSchema = new Schema({

    title: {
      type: String
    },
    creater: {
      type: Schema.Types.ObjectId,
      required: true
    },
    description: {
      type: String,
      required: true
    },






});



const TutorialModel = mongoose.model('Tutorial', tutorialSchema);

module.exports = TutorialModel;
