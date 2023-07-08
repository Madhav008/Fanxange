const express = require('express');
const app = express();
const authRoutes = require('./api/routes/auth');
const apiRoutes = require('./api/routes/api');
require('./initDB')();

// Middleware and other configurations

// Use the authentication routes
app.use('/auth', authRoutes);

// Use the API routes
app.use('/', apiRoutes);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
});