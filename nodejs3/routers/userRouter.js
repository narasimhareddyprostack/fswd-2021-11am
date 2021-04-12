import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    
  res.end("User - Root");
});
router.post("/", (req, res) => {
  res.end("..............., Post... ");
});
router.post("/", (req, res) => {
  res.end("Bad developer");
});
router.post("/login", (req, res) => {
  res.end("Loggin Successfully");
});
router.post("/registration", (req, res) => {
  res.end("Registration Successfullly");
});

export default router;
