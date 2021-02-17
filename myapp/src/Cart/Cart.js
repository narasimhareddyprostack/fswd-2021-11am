import React from "react";
import Order from "./../Order/Order";
function Cart() {
  let cartName = "FirstCart";
  let size = [38, 40, 42];
  let CartItems = {
    cartItem: [],
    totalPrice: 5000,
  };
  function addtoCart() {
    console.log("Hello, Testing");
  }
  return (
    <React.Fragment>
      <Order
        name={cartName}
        dSize={size}
        dObj={CartItems}
        method1={addtoCart}
      />
    </React.Fragment>
  );
}

export default Cart;
