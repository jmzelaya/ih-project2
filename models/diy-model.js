const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userModel = require('../models/user-model.js');

const diySchema = new Schema({

    title: {
      type: String
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true
    },
    description: {
      type: String,
      // required: true
    },
    diyFinalImg:{
      type: String,
      // required: true
    },

    supplyList: [
      {
        item: {
          type: String,
          required: true
        }
      }
    ],

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
          required: true
        }
      }
    ]
});



const DiyModel = mongoose.model('Diy', diySchema);

module.exports = DiyModel;
