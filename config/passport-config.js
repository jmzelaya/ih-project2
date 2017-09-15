const passport = require('passport');

const userModel = require('../models/user-model.js');


passport.serializeUser((userFromDb, done) => {

  done(null, userFromDb._id);

});

passport.deserializeUser((idFromBowl, done) => {
  UserModel.findById(
    idFromBowl,
    (err, userFromDb) => {
        if (err) {
          done(err);
          return;
        }

        done(null, userFromDb);
    }
  );
});

//STRATEGIES SETUP --------------------------------

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

passport.use(
  new LocalStrategy(
    {
      username: 'loginEmail',
      password: 'loginPassword'
    },

    (emailValue, passValue, done) => {
        UserModel.findOne(
          { email: emailValue },

          (err, userFromDb) => {
              if (err) {
                done(err);
                return;
              }

              if(userFromDb === null) {

                done(null, false, { message: 'Your email is incorrect.'});
                return;
              }

              const passIsCorrect = bcrypt.compareSync(passValue, userFromDb.encryptedpassword);

              if (passIsCorrect === false){

                  done(null, false, { message: 'Your password is incorrect'});
                  return;
              }

              done(null, userFromDb);
          }
        );
    }
  )
);
