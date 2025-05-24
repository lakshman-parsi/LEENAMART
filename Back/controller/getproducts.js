const productsmdl = require("../models/products");

async function getproducts(req, res) {
  try {
    const allproducts = await productsmdl.find().sort({ category: -1 });
    res.status(201).json({
      data: allproducts,
      error: false,
      success: true,
      message: "successfully accessed",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = getproducts;
