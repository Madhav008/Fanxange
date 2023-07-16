const express = require('express');
const app = express();
const authRoutes = require('./api/routes/auth');
const apiRoutes = require('./api/routes/api');
const cookieSession = require("cookie-session");
const passport = require('passport');
const isAuthenticated = require('./api/midleware/authmiddlware');
const morgan = require('morgan');
const cors  = require('cors');
const cookieParser = require("cookie-parser"); // parse cookie header

require('./initDB')();

app.use(morgan('dev'));

// Middleware and other configurations


// Add express-session middleware
app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );


// parse cookies
app.use(cookieParser());


// Add Passport.js middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);



// Use the authentication routes
app.use('/auth', authRoutes);

// Use the API routes
app.use('/api', isAuthenticated, apiRoutes);
// app.use('/', apiRoutes);


const cronJob = require('./api/routes/cronjob')
app.use('/corn',cronJob);

const matches = require('./api/routes/matches')
app.use('/match',matches)

const series = require('./api/routes/series')
app.use('/series',series)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
});
