const asyncHandler = require("express-async-handler");
const User = require("../models/SignUpModel");
const bcrypt = require("bcrypt");

// Register user
const registerUser = asyncHandler(async (req, res) => {
    const { username,email, phonenumber, password, role } = req.body;

    if (!username || !email || !phonenumber || !password || !role) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        username,
        email,
        phonenumber,
        password: hashedPassword,
        role
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});
module.exports = {registerUser};
