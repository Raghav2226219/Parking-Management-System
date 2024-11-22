const jwt = require('jsonwebtoken');
const User = require("../models/SignUpModel");

const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: "No token provided, authorization denied" });
        }

        if (token.startsWith("Bearer ")) {
            token = token.split(' ')[1];
        }

        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);

        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }

        next(); 
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = { protect };
