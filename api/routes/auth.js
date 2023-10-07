const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
require('dotenv').config();

// Google login route
router.get('/google/login', authController.googleLogin);

// Success endpoint
router.get('/success', authController.successEndpoint);


router.get('/google/callback', authController.googleCallback)

/* router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        res.redirect(process.env.CLIENT_URL);
    });
 */
router.get('/logout', function (req, res) {
    res.clearCookie('token');
    res.redirect(process.env.CLIENT_URL);

})

module.exports = router;
