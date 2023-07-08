const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
require('dotenv').config();
const User = require('../models/User'); // Import the User model
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
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
            email: profile.emails[0].value,
            image: profile.photos[0].value
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


passport.serializeUser((user, done) => {
  // Store the user ID in the session
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  // Retrieve the user from the database based on the stored ID
  done(null, user);
});

// Google login controller
const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

// Google callback controller
const googleCallback = passport.authenticate('google', {
  successRedirect: '/auth/success', // Redirect to a success endpoint
  failureRedirect: '/auth/failure', // Redirect to a failure endpoint
});

// Success endpoint controller
const successEndpoint = (req, res) => {
  // Handle the successful authentication response
  res.json({
    message: 'Authentication successful',
    user: req.user,
  });

  console.log(req.user)
});

// Failure endpoint controller
const failureEndpoint = (req, res) => {
  // Handle the failed authentication response
  res.json({ message: 'Authentication failed' });
};

module.exports = {
  googleLogin,
  googleCallback,
  successEndpoint,
  failureEndpoint,
};
