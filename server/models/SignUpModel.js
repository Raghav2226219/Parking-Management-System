const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Enter Your First Name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Last Name"],
    },
    phonenumber: {
        type: Number,
        required: [true, "Please Enter Your Email"],
        unique: true, // Ensure email uniqueness
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"], 
    },
    role: {
        type: String,
        required: [true, "Please Enter Your Age"],
    }
});

module.exports = mongoose.model("User", userSchema);
