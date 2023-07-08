const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Google login route
router.get('/google/login', authController.googleLogin);

// Google callback route
router.get('/google/callback', authController.googleCallback);

// Success endpoint
router.get('/success', authController.successEndpoint);

// Failure endpoint
router.get('/failure', authController.failureEndpoint);

module.exports = router;
