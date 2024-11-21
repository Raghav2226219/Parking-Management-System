const jwt = require('jsonwebtoken');
const User = require("../models/SignUpModel");

const protect = async (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ message: "No token provided, authorization denied" });
        return;
    }

    if (token.startsWith("Bearer ")) {
        token = req.headers.authorization.split(' ')[1];
    }

        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);

        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            res.status(401).json({ message: "User not found" });
            return;
        }

        next(); 
   
        res.status(401).json({ message: "Invalid token" });
    
};

module.exports = protect;
