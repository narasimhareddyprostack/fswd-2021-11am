const fs = require("fs");
/* fs.readFile(path, format, ()=>{}) */

fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) throw err;
  let newData = JSON.parse(data);
  /* console.table(newData); */
  fs.writeFile("customer.json", JSON.stringify(newData), (err) => {
    if (err) throw err;
  });
});
