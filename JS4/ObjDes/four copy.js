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

let { name } = payload.products.find((iterateValue) => {
  return iterateValue.name === "Iphone 12";
});

console.log(name);
