const express = require("express");
const cookieparser = require("cookie-parser");

const cors = require("cors");
const app = express();
require("dotenv").config();
const connection = require("./config/db");
const router = require("./routers/index");
app.use(
  cors({
    origin: process.env.F_URL,
    credentials: true,
  })
);
app.use(cookieparser());
app.use(express.json());
app.use("/api", router);
const port = 2390;
connection().then(
  app.listen(port, () => {
    // console.log("database connected")
    console.log("Server is Running");
  })
);
