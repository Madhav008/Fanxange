const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    price: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
        required: true
    },
    user: {
        type: String,
        required: true
    },
    orderType: {
        type: String,
        enum: ["Buy", "Sell"],
        required: true
    },
    playerId: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["Open", "Close"],
        default: "Open",
        required: true
    }
});

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;
