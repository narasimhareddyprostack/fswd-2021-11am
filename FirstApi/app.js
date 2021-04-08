//create express server
import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: "./config/config.env" });
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, This is express Server");
});

app.get("/employee", (req, res) => {
  fs.readFile(
    path.join(__dirname, "employee", "data", "employee.json"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      res.status(200).json(JSON.parse(data));
    }
  );
});

app.get("/contacts", (req, resp) => {
  resp.send("Contacts Data");
});
app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on Port Number : ${process.env.PORT}`);
});
