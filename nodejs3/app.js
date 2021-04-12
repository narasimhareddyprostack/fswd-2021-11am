//create express server
import express from "express";
import morgan from "morgan";
import chalk from "chalk";
import productRouter from "./routers/productRouter";
import userRouter from "./routers/userRouter";

const app = express();
const miles = 18;
const calculateFeet = (miles) => miles * 5280;
app.use(morgan("dev"));
app.get("/", (request, response) => {
  response.end("Hello, Good Morning Express Server - Root");
});

app.get("/about", (request, response) => {
  response.end("Hello, Good Morning Express Server - About Us");
});
app.get("/contactus", (request, response) => {
  response.end("Hello, Good Morning Express Server - Contact Us Page");
});

app.use("/products", productRouter);
app.use("/user", userRouter);


app.listen(8000, (err) => {
  if (err) throw err;
  console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet
}.
`);
  console.log("Running on port : 8000");
});
