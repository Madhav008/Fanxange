const mongoose = require('mongoose');
const Orders = require('./Orders');

const orderBookSchema = new mongoose.Schema({
  buyOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Orders'
    }
  ],
  sellOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Orders'
    }
  ]
});

const OrderBook = mongoose.model('OrderBook', orderBookSchema);




module.exports = OrderBook;
