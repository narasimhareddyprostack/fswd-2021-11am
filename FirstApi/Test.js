const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "employee", "data", "employee.json"));

console.log(process.env.PORT);
