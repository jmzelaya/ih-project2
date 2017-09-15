const passport = require('passport');

const UserModel = require('../models/user-model.js');


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
      usernameField: 'loginEmail',
      passwordField: 'loginPassword'
    },

    (emailValue, passValue, done) => {
      console.log('inside find');
        UserModel.findOne(
          { email: emailValue },

          (err, userFromDb) => {
            console.log('inside the user');
              if (err) {
                done(err);
                return;
              }

              if(userFromDb === null) {
                console.log('user is null');

                done(null, false, { message: 'Your email is incorrect.'});
                return;
              }

              const passIsCorrect = bcrypt.compareSync(passValue, userFromDb.encryptedpassword);
              console.log('4');
              if (passIsCorrect === false){

                  done(null, false, { message: 'Your password is incorrect'});
                  return;
              }

              done(null, userFromDb);
              console.log('5');
          }
        );
    }

  )
);
