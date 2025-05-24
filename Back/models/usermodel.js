const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const usermdl = mongoose.model("USERS", userschema);
module.exports = usermdl;
