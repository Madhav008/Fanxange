const express = require('express');
const router = express.Router();
const apiController = require('../controller/apicontrlloer');

// Example protected API route
router.get('/', apiController.protectedRoute);

module.exports = router;
