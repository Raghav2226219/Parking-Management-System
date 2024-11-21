const asyncHandler = require("express-async-handler");
const User = require("../models/SignUpModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Please enter both email and password");
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error("User not found");
    }

    // Check if password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        res.status(400);
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.PRIVATE_KEY,
        { expiresIn: '1h' } 
    );


    console.log("Login Success")

    // Successful login
    res.status(200).json({
        _id: user.id,
        email: user.email,
        message: "Login successful"
    });
});

module.exports = {registerUser,loginUser};
