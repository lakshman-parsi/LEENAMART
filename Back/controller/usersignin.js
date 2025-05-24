const usermdl = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function usersignin(req, res) {
  try {
    const { email, password } = req.body;
    console.log("body is", req.body);
    console.log("email is", email);
    if (!email || email == "") {
      throw new Error("enter email");
    }
    if (!password || password == "") {
      throw new Error("enter password");
    }
    const checkuser = await usermdl.findOne({ email: email });
    console.log("check use is", checkuser);
    if (!checkuser) {
      throw new Error("user Not Exist");
    }
    var validpassword = await bcrypt.compare(password, checkuser.password);
    console.log(validpassword);
    if (validpassword) {
      const tokendata = {
        _id: checkuser._id,
        email: checkuser.email,
      };
      const token = jwt.sign(
        {
          data: tokendata,
        },
        process.env.SEC_KEY,
        { expiresIn: 60 * 60 * 8 }
      );
      const tokenoption = {
        httponly: true,
        secure: process.env.NODE_ENV === "production",
      };
      res.cookie("token", token, tokenoption).status(201).json({
        data: tokendata,
        success: true,
        error: false,
        message: " user Login succesfully",
      });
    } else {
      throw new Error("invalid password");
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      error: true,
      message: err.message,
    });
  }
}

module.exports = usersignin;
