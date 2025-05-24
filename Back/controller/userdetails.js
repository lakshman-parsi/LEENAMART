const usermdl = require("../models/usermodel");
async function userdetails(req, res) {
  try {
    console.log("requested user is", req.userid);
    const current_user = await usermdl.findById(req.userid);
    console.log("current user is", current_user);
    res.status(200).json({
      data: current_user,
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
module.exports = userdetails;
