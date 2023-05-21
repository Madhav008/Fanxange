let ticker = {
  name: "v_kohli",
  price: 129
}

let OrderBook = {
  buy_orders: [],
  sell_orders: [],
};

function createBuyOrder(orderBook, order) {
  orderBook.buy_orders.push(order);
}

function createSellOrder(orderBook, order) {
  orderBook.sell_orders.push(order);
}

function matchOrder(orderBook) {
  let { buy_orders, sell_orders } = orderBook;

  sell_orders.sort()
  buy_orders.sort()
  buy_orders.reverse()

  if (buy_orders[0].buy_price >= sell_orders[0].sell_price) {
    buy_orders[0].status= "Accepted"
    sell_orders[0].status= "Accepted"
    
    console.log("ORDER FILLED at: " + buy_orders[0].buy_price + " Volume: " + (buy_orders[0].volume - sell_orders[0].volume));
    ticker.price = buy_orders[0].buy_price;
    buy_orders.shift()
    sell_orders.shift()
  }

}

let buy_order = {
  buy_price: 132,
  volume: 1,
  timestamp: Date.now(),
  status:'Placed'
};

let buy_order1 = {
  buy_price: 133,
  volume: 1,
  timestamp: Date.now(),
  status:'Placed'
};

let sell_order = {
  sell_price: 126,
  volume: 1,
  timestamp: Date.now(),
  status:'Placed'
};

// Usage example:
createBuyOrder(OrderBook, buy_order);
createBuyOrder(OrderBook, buy_order1);
createSellOrder(OrderBook, sell_order);
console.log(ticker)
console.log(OrderBook);
console.log(buy_order)
console.log(buy_order1)
console.log(sell_order)

matchOrder(OrderBook)
console.log(ticker)
console.log(OrderBook);
console.log(buy_order)
// console.log(buy_order1)
// console.log(sell_order)


