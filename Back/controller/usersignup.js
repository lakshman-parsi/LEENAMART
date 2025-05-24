const usermdl = require("../models/usermodel");
var bcrypt = require("bcryptjs");
async function usersignup(request, res) {
  try {
    // console.log("body is", request.body);
    const { name, email, password } = request.body;
    // console.log("hai");

    // console.log(request.body);
    // console.log("hai");
    const existingUser = await usermdl.findOne({ email: email });
    console.log("existingUser is", existingUser);
    if (existingUser) {
      throw new Error("User already Exists");
    }
    if (!email) {
      throw new Error("enter email");
    }
    if (!password) {
      throw new Error("enter password");
    }
    if (!name) {
      throw new Error("enter name");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    const payload = { ...request.body, role: "General", password: hash };
    const userdata = new usermdl(payload);
    const saveuser = await userdata.save();
    res.status(201).json({
      data: saveuser,
      error: false,
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      meessage: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = usersignup;
