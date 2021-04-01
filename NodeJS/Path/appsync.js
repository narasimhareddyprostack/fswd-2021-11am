const fs = require("fs");
let x = fs.readFileSync("app.js", "utf-8");

console.log(x);
console.log("Hello, GM");
