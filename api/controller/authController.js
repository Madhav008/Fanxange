const { google } = require('googleapis');
require('dotenv').config();
const User = require('../models/User'); // Import the User model
const jwt = require('jsonwebtoken');



// Secret key for JWT
const jwtSecret = 'your-jwt-secret-key';

// Replace with your Google OAuth2.0 credentials
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_CALLBACK_URL
);


const googleLogin = (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
  });
  res.redirect(authUrl);
}


const googleCallback = async (req, res) => {
  const { code } = req.query;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      version: 'v2',
      auth: oauth2Client,
    });

    const { data } = await oauth2.userinfo.get();

    try {
      // Check if the user already exists in the database
      let user = await User.findOne({ googleId: data.id });

      if (!user) {
        // If the user doesn't exist, create a new user
        user = new User({
          googleId: data.id,
          displayName: data.name,
          email: data.email,
          image: data.picture
        });

        // Save the user to the database
        await user.save();
      }

    } catch (error) {
      console.log(error.message)
    }
    // Create a JWT token with user data
    const token = jwt.sign({ userData: data }, jwtSecret, {
      expiresIn: "2h",
    });

    // Set the JWT token in a cookie
    res.cookie('token', token, { httpOnly: true, secure: true }); // Use secure in production

    // Redirect to a success page with the JWT token as a query parameter
    res.redirect(process.env.CLIENT_URL);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.redirect('/');
  }
}

const successEndpoint = ((req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  try {
    
    // Verify the JWT token
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        // If there's an error during verification, return a 403 Forbidden
        return res.sendStatus(403);
      }
      const userData = decoded.userData;
      console.log('User Data:', userData);
      res.status(200).json({ authenticated: true, user: userData });

    });

  } catch (error) {
    console.error('JWT verification failed:', error);
    res.status(401).send('Unauthorized');
  }
});



module.exports = {
  googleLogin,
  googleCallback,
  successEndpoint,
};
