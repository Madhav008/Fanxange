const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
require('dotenv').config();
const User = require('../models/User'); // Import the User model
const mongoose = require('mongoose'); // Import mongoose

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if the user already exists in the database
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // If the user doesn't exist, create a new user
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value
          });

          // Save the user to the database
          await user.save();
        }

        // Call done() with the user object to continue the authentication process
        done(null, user);
      } catch (error) {
        // Call done() with the error to handle any errors that occurred during authentication
        done(error);
      }
    }
  )
);

// Google login controller
const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

// Google callback controller
const googleCallback = passport.authenticate('google', {
  successRedirect: '/api/success', // Redirect to a success endpoint
  failureRedirect: '/api/failure' // Redirect to a failure endpoint
});


// Success endpoint controller
const successEndpoint = (req, res) => {
  // Handle the successful authentication response
  res.json({ message: 'Authentication successful' });
};

// Failure endpoint controller
const failureEndpoint = (req, res) => {
  // Handle the failed authentication response
  res.json({ message: 'Authentication failed' });
};

module.exports = {
  googleLogin,
  googleCallback,
  successEndpoint,
  failureEndpoint
};
