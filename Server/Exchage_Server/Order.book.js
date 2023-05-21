let order = {
    buy_price: 0,
    sell_price: 0,
    buy_volume: 0,
    sell_volume: 0
  };
  
  let buy_order = {
    buy_price: 132,
    volume: 1,
    timestamp: Date.now()
  };
  
  let sell_order = {
    sell_price: 126,
    volume: 1,
    timestamp: Date.now()
  };
  
  let OrderBook = {
    buy_orders: [],
    sell_orders: [],
    stock_price: 129,
    open_orders: 0
  };
  
  function createBuyOrder(orderBook, order) {
    orderBook.buy_orders.push(order);
    orderBook.open_orders++;
  }
  
  function createSellOrder(orderBook, order) {
    orderBook.sell_orders.push(order);
    orderBook.open_orders++;
  }
  
  // Usage example:
  createBuyOrder(OrderBook, buy_order);
  createSellOrder(OrderBook, sell_order);
  console.log(OrderBook);
  