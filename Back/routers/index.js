const express = require("express");
const router = express.Router();
const usersignup = require("../controller/usersignup");
const usersignin = require("../controller/usersignin");
const userdetails = require("../controller/userdetails");
const authtoken = require("../middleware/authtoken");
const userlogout = require("../controller/uselogout");
const alluser = require("../controller/allusers");
const updateproduct = require("../controller/editproduct");
const getproduct = require("../controller/getproducts");
const rolechange = require("../controller/rolechange");
const uploadproducts = require("../controller/uploadproducts");
const getcategory = require("../controller/getcategoryproducts");
const deleteprouct = require("../controller/deleteproduct");
const getcategorywise = require("../controller/getcategorywise");
const productdetails=require("../controller/productdetails")
router.post("/signup", usersignup);
router.post("/login", usersignin);
router.post("/changerole", rolechange);
router.get("/userdetails", authtoken, userdetails);
router.get("/logout", userlogout);
router.get("/all-users", alluser);
router.post("/productupload", uploadproducts);
router.get("/allproducts", getproduct);
router.post("/editproduct", updateproduct);
router.get("/getcatproducts", getcategory);
router.post("/deleteproduct", deleteprouct);
router.post("/get_category", getcategorywise);
router.post("/prod_det", productdetails);


module.exports = router;
