const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');

const app = express();

// Configure passport Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: '505078435717-t2ma4jgkf2g9p0i5nqq28te7bjavu2nu.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000',
    },
    (accessToken, refreshToken, profile, done) => {
      // Customize user information here
      const user = {
        id: profile.id,
        email: profile.emails[0].value,
        hasuraRole: 'user', // Example Hasura role
        hasuraUserId: '1234', // Example Hasura user ID
      };

      return done(null, user);
    }
  )
);

// Middleware to initialize Passport
app.use(passport.initialize());

// Authenticate with Google
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google callback URL
app.get(
  '/',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // Generate JWT token with custom claims
    const token = jwt.sign(
      {
        ...req.user,
        "https://hasura.io/jwt/claims": {
          "x-hasura-user-id": req.user.hasuraUserId,  
          "x-hasura-allowed-roles":["user"],
          "x-hasura-default-role": "user",
          "x-hasura-org-id": "123",
          "x-hasura-custom": "custom-value"
        }
      },
      'jaishreeramc7tzBNVfjpMkNDi2yARAAKzQlk8O2IKoxQu4nF7EdAh8s3TwpHwrdWT6R'
    );

    // Redirect or send response with token
    res.json({ token });
  }
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
