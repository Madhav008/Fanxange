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
    }
});

// Define a pre-save hook for short orders
orderSchema.pre('save', async function (next) {
    if (this.orderType === 'Sell') {
        try {
            // 1. Check if the user has the asset available for shorting
            /*  const userPortfolio = await getUserPortfolio(this.user); // Implement this function to get the user's portfolio
             const assetBalance = userPortfolio[this.asset] || 0;
 
             if (assetBalance < this.quantity) {
                 throw new Error('Insufficient assets available for shorting.');
             } */

            // 2. Deduct the asset quantity from the user's portfolio (you'll need to implement this function)
            await executeShortOrder(this);
            next();
        } catch (error) {
            next(error); // Pass any errors to the next middleware
        }
    } else {
        next();
    }
});

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;
