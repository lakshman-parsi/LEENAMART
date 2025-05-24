const productsmdl = require("../models/products");

async function deleteprouct(req, res) {
  try {
    const { _id } = req.body;
    const deletedProduct = await productsmdl.findByIdAndDelete(_id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false, error: true });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      error: false,
      data: deletedProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = deleteprouct;
