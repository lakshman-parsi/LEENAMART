const productsmdl = require("../models/products");

async function productdetails(req, res) {
  try {
    const { _id } = req.body;
    const product = await productsmdl.findById(_id);
    if (!product) {
      throw new Error("Product does not exist");
    }
    res.status(200).json({
      success: true,
      error: false,
      message: "succesfully get product details",
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = productdetails;
