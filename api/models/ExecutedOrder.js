// ExecutedOrders.js
const mongoose = require('mongoose');

const executedOrderSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders',
        required: true,
    },
    executionPrice: {
        type: Number,
        required: true,
    },
    executionVolume: {
        type: Number,
        required: true,
    },
    executionTimestamp: {
        type: Date,
        default: Date.now,
    },
});

const ExecutedOrders = mongoose.model('ExecutedOrders', executedOrderSchema);

module.exports = ExecutedOrders;
