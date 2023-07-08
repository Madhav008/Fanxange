// Create a middleware to check authentication
const isAuthenticated = (req, res, next) => {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
      // If authenticated, allow access to the next middleware or route handler
      return next();
    } else {
      // If not authenticated, redirect or send an error response
      // res.status(401).json({ message: 'Unauthorized' });
      res.redirect('/auth/google/login');
    } // Replace '/login' with the appropriate login page route
  };
  
  module.exports = isAuthenticated;
  