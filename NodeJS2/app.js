const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.end("Hello, Welcome to Express JS");
});
app.get("/about", (request, response) => {
  response.end("About us Page");
});

app.listen(8000, (err) => {
  if (err) throw err;
  console.log(`Server is Running on Post : ${8000}`);
});
