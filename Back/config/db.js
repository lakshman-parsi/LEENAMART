const mongoose = require("mongoose");

async function datab() {
  try {
    const MONGODB_URI =
      "mongodb+srv://lakshman26spark:Lakshman19@cluster0.eqmsw.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0";

    await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
}

module.exports = datab;
