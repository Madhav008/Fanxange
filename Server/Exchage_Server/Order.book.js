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
  
 function matchOrder(orderBook){
    let {buy_orders,sell_orders} = orderBook;

    sell_orders.sort()
    buy_orders.sort()
    buy_orders.reverse()

    if(buy_orders[0].buy_price>=sell_orders[0].sell_price){
      console.log("ORDER FILLED at: "+buy_orders[0].buy_price+" Volume: "+(buy_orders[0].volume-sell_orders[0].volume));
      orderBook.stock_price = buy_orders[0].buy_price;
      buy_orders.shift()
      sell_orders.shift()
      orderBook.open_orders =orderBook.open_orders-2;
    }
    
 }

 
  // Usage example:
  createBuyOrder(OrderBook, buy_order);
  createSellOrder(OrderBook, sell_order);
  console.log(OrderBook);
  matchOrder(OrderBook)
  console.log(OrderBook);

  