async function userlogout(req, res) {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "Logged out successfully",
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: "log out error",
      error: true,
      success: false,
    });
  }
}
module.exports = userlogout;
