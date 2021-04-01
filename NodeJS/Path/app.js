const path = require("path");
const fs = require("fs");
/* console.log("Dir Name : ", __dirname);
console.log("File Name:", __filename); */

// read JSON file(file is there in different folder)
//fs.readFile(path, utf-8, ()=>{})
fs.readFile(
  path.join(__dirname, "Server", "FS", "employees.json"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log("Hello, ");
  }
);


