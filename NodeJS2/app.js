const fs = require("fs");
let x = fs.readFile("one.txt", (err, data) => {
  console.log(data);
});


