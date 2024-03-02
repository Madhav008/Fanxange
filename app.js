const express = require('express');
const app = express();
const authRoutes = require('./api/routes/auth');
const apiRoutes = require('./api/routes/api');
const isAuthenticated = require('./api/midleware/authmiddlware');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require("cookie-parser"); // parse cookie header
require('./initDB')();

app.use(morgan('dev'));


// parse cookies
app.use(cookieParser());


app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.1.65:5173", "http://localhost:5125", "http://192.168.1.124:5125", "https://fanxange.live", "http://fanxange.live"], // allow to server to accept request from different origin
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
app.use('/cron', cronJob);

const matches = require('./api/routes/matches')
app.use('/match', matches)

const series = require('./api/routes/series')
app.use('/series', series)


const player = require('./api/routes/player')
app.use('/player', player)


const teams = require('./api/routes/teams')
app.use('/team', teams)

const performance = require('./api/routes/performance')
app.use('/performance', performance)


const order = require('./api/routes/order');
app.use("/order", order)


const wallet = require('./api/routes/wallet');
app.use("/wallet", wallet)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});
