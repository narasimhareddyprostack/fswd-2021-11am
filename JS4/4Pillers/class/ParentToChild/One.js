class OrderDetails {
  orderDetails = () => {
    console.log("Parent Class - Method");
  };
}
class OrderStatus extends OrderDetails {
 /* orderDetails = () => {
  console.log("Child Class - Method");
  };  */
}
let newOrder = new OrderStatus();
newOrder.orderDetails();
