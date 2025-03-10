const mongoose = require("mongoose");
require("dotenv").config();

// const dbName = "admin"; // ✅ Define your database name here

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "db" // 👈 Ensure the correct database is used
    });
    console.log("conn",conn);
    
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
