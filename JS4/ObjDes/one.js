let payload = {
  products: [
    { name: "Iphone", price: 5000, qty: 3 },
    { name: "Iphone 12", price: 50000, qty: 30 },
  ],
  cartItem: null,
  order: "5 Orderrs",
};

let { products, order } = payload;
console.log(order);
order = "10 Orders";

console.log(order);
console.log(payload);
