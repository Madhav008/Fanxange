const express = require('express');
const router = express.Router();
const apiController = require('../controller/orderscontroller');

// Example protected API route
router.get('/create/orderbook', apiController.createOrderBook);
router.post('/create', apiController.createOrder);





module.exports = router;
