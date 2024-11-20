const express = require("express");
const router = express.Router();
const { registerUser , loginUser } = require("../controllers/SignupController");
// router.post("/signup", registerUser);

router.post("/signUp",registerUser ,(req, res) => {
    console.log("Incoming Data:", req.body); // Log incoming form data
    res.status(201).json({ message: "Signup data received successfully" });
});

router.post("/login",loginUser);

module.exports = router;