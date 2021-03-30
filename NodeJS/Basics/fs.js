// core modules
// fs, http, os, path

const fs = require("fs");
let data = fs.readFileSync("one.txt", "utf-8");
console.log(data);

fs.writeFileSync("two.txt", data);
