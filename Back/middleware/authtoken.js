const jwt = require("jsonwebtoken");

async function authtoken(req, res, next) {
  try {
    const token = req.cookies.token;

    console.log("token is------", token);
    if (!token) {
      // Use return to ensure no further code executes
      return res.status(400).json({
        message: "Invalid token",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.SEC_KEY, function (err, decoded) {
      if (err) {
        console.log("new error occurred");
        // Use return to ensure no further code executes
        return res.status(401).json({
          message: "Token verification failed",
          error: true,
          success: false,
        });
      }

      console.log(decoded);
      req.userid = decoded.data._id;
      console.log("requested user is present", req.userid);
      next();
    });
  } catch (err) {
    // Ensure the error response is only sent once
    res.status(400).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}

module.exports = authtoken;
