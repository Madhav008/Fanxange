const jwt = require('jsonwebtoken');
const jwtSecret = 'your-jwt-secret-key'; // Replace with your actual secret key

const isAuthenticated = (req, res, next) => {
  // Get the JWT token from the cookie (assuming the cookie is named 'token')
  const token = req.cookies.token;

  if (!token) {
    // If no token is found, return a 401 Unauthorized
    return res.sendStatus(401);
  }

  // Verify the JWT token
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      // If there's an error during verification, return a 403 Forbidden
      return res.sendStatus(403);
    }

    // Token is valid, attach user data to the request and continue
    req.user = decoded;
    next();
  });
};

module.exports = isAuthenticated;
