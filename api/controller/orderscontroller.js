const OrderBook = require("../models/OrderBook");
const Orders = require("../models/Orders");

// Example protected route controller
const createOrder = async (req, res) => {
    const { price, qty, timestamp, status, user, orderType, playerId } = req.body;

    try {
        const order = new Orders({
            price, qty, timestamp, status, user, orderType, playerId
        });

        // Save the order to the database
        await order.save();

        // Check if the orderType is "Buy" to determine where to add it in the order book
        if (orderType === "Buy") {
            const orderBook = await OrderBook.findByIdAndUpdate(
                "650e99b298038f94a5da077d", // Use the actual order book ID
                { $push: { buyOrders: order._id } }, // Push the order's ID into buyOrders
                { new: true }
            );
            console.log(orderBook)
        } else if (orderType === "Sell") {
            const orderBook = await OrderBook.findByIdAndUpdate(
                "650e99b298038f94a5da077d", // Use the actual order book ID
                { $push: { sellOrders: order._id } }, // Push the order's ID into sellOrders
                { new: true }
            );
            console.log(orderBook)

        } else {
            return res.status(400).json({ message: "Invalid orderType" });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Order not executed" });
    }
};


const createOrderBook = async (req, res) => {
    const orderBook = new OrderBook();
    try {
        await orderBook.save();
        res.status(200).json(orderBook)
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: "OrderBook not created succesfully" })
    }
}

module.exports = {
    createOrder, createOrderBook
};
