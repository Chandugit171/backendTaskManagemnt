const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
// const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  // Check if Authorization header exists and starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract the token from "Bearer <token>"

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user by ID and attach it to request object (excluding password)
      req.user = await Users.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found, not authorized" });
      }

      next(); // Proceed to next middleware/controller
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, invalid token" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

module.exports = protect;
