const usermdl = require("../models/usermodel");

async function rolechange(req, res) {
  try {
    console.log("request body is", req.body);
    const { _id, newrole } = req.body;
    const updateuser = await usermdl.findByIdAndUpdate(
      _id,
      { role: newrole },
      { new: true }
    );
    if (!updateuser) {
      throw new Error("role error occured");
    }
    res.status(200).json({
      data: updateuser,
      error: false,
      success: true,
      message: "User Role Updated",
    });
  } catch (err) {
    res.status(400).json({
      Message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = rolechange;
