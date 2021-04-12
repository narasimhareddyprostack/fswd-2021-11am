import express from "express";
let router = express.Router();

router.get("/", (req, res) => {
  res.end("Separate Router file, ... product Data");
});
router.get("/refr", (req, res) => {
  res.end("Displaying Products");
});
router.get("/tv", (req, res) => {
  res.end("Displaying TV");
});

export default router;
