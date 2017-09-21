const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ReviewModel = require('../models/review-model.js');
const userModel = require('../models/user-model.js');

const diySchema = new Schema({

    title: {
      type: String
    },
    owner: {
      type: Schema.Types.ObjectId,
      // required: true
    },
    description: {
      type: String,
      // required: true
    },
    diyFinalImg:{
      type: String,
      // required: true
    },


    steps:[
      {
        stepTitle: {
          type: String,
          required: true
        },
        stepImage: {
          type: String,
          // required: true
        },
        stepDesc: {
          type: String,
          // required: true
        }
      } //end of step #1
    ],

    reviews: [ReviewModel.schema]
});



const DiyModel = mongoose.model('Diy', diySchema);

module.exports = DiyModel;
