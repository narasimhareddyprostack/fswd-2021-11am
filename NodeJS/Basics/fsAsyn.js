const fs = require("fs");

fs.readFile("one.txt", "utf-8", (error, data) => {
  console.log(data);
  fs.writeFile("twenty.txt", data, (err) => {});
});

console.log("Hello, Good Morning...............");
