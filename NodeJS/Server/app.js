const http = require("http");

//how to create http server
const server = http.createServer((request, response) => {
  response.end(`<h1>Hello, Server is Running Port No: 8000</h1>`);
});

server.listen(8000, () => {
  console.log("Server Running Port No:", 8000);
});
