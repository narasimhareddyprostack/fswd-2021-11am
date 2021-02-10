let data = {
  one: 1995,
  two: {
    name: "PSA",
  },
  three: "Bangalore",
};

let x = { ...data };

data["one"] = 1996;
console.log(x["one"]);
console.log(data["one"]);

data["two"]["name"] = "Prostack Academy";
console.log(x["two"]["name"]);
console.log(x["one"]);
