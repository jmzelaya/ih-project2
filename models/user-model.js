const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DiyModel = require('../models/diy-model.js');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },

    encryptedpassword: { type: String },

    name: {
      type: String,
      required: true
    }

  },

  {
    timestamps: true
  }
);


const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
