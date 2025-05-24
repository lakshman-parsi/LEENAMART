const productsmdl = require("../models/products");

async function getcategorywise(req, res) {
  try {
    const { category } = req.body;
    console.log("category is", category);
    const cate = await productsmdl.find({
      category: category,
    });
    if (!cate) {
      throw new Error("category error");
    }
    res.status(200).json({
      data: cate,
      message: "successfully get category products",
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = getcategorywise;
