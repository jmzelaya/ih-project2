const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },

    encryptedpassword: { type: String }

  },

  {
    timestamps: true
  }
);


const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
