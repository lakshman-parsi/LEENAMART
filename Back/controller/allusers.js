const authtoken = require("../middleware/authtoken");
const usermdl = require("../models/usermodel");

async function alluser(req, res) {
  try {
    // console.log("requested user is", req.userid);
    const all_user = await usermdl.find();
    console.log("current user is", all_user);
    res.status(200).json({
      data: all_user,
      error: false,
      success: true,
      message: "user details successfully retreving",
    });
  } catch (err) {
    res.status(400).json({
      error: err.message || err,
      success: false,
      message: "user details error",
    });
  }
}
module.exports = alluser;
