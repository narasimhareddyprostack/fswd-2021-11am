let payload = {
  products: [
    { name: "Iphone", price: 5000, qty: 3 },
    { name: "Iphone 12", price: 50000, qty: 30 },
    { name: "Iphone", price: 5000, qty: 3 },
    { name: "Iphone 12", price: 50000, qty: 30 },
    { name: "Iphone", price: 5000, qty: 3 },
    { name: "Iphone 12", price: 50000, qty: 30 },
    { name: "Iphone", price: 5000, qty: 3 },
    { name: "Iphone 12", price: 50000, qty: 30 },
  ],
  cartItem: null,
  order: "5 Orderrs",
};

console.log(payload.products[0].name);
