const productsmdl = require("../models/products");

async function uploadproducts(req, res) {
  try {
    const { pname, brandname, description, category, pimages } = req.body;
    if (pname.trim() == "") {
      throw new Error("Enter valid product name");
    }
    if (brandname.trim() == "") {
      throw new Error("Enter valid brand name");
    }
    if (category.trim() == "") {
      throw new Error("select product category");
    }
    if (pimages.length == 0) {
      throw new Error("Upload Product image");
    }
    if (description.trim() == "") {
      throw new Error("enter product description");
    }

    const up = new productsmdl(req.body);
    const upsave = await up.save();
    res.status(201).json({
      message: "product upload successfully",
      error: false,
      success: true,
      data: upsave,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = uploadproducts;
