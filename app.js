const express = require('express');
const app = express();
const authRoutes = require('./api/routes/auth');
const apiRoutes = require('./api/routes/api');
const cookieSession = require("cookie-session");
const passport = require('passport');
const isAuthenticated = require('./api/midleware/authmiddlware');

require('./initDB')();


// Middleware and other configurations
// Add express-session middleware
app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );

// Add Passport.js middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// Use the authentication routes
app.use('/auth', authRoutes);

// Use the API routes
app.use('/', isAuthenticated, apiRoutes);





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
});