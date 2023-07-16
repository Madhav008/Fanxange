const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controller/authController');
require('dotenv').config();

// Google login route
router.get('/google/login', authController.googleLogin);

// Success endpoint
router.get('/success', authController.successEndpoint);

// Failure endpoint
router.get('/failure', authController.failureEndpoint);


router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        res.redirect(process.env.CLIENT_URL);
    });

router.get('/logout', function (req, res) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect(process.env.CLIENT_URL);
    });
})

module.exports = router;
