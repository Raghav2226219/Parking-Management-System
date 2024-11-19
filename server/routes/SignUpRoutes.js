const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/SignupController");
router.post("/signup", registerUser);
module.exports = router;