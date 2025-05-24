const productsmdl = require("../models/products");

async function updateproduct(req, res) {
  try {
    const {
      _id,
      pname,
      description,
      category,
      pimages,
      brandname,
      actualprice,
      sellprice,
    } = req.body;
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
    const product = await productsmdl.findByIdAndUpdate(
      _id,
      {
        pname: pname,
        description: description,
        category: category,
        pimages: pimages,
        actualprice: actualprice,
        sellprice: sellprice,
        brandname: brandname,
      },
      { new: true }
    );
    if (!product) {
      throw new Error("product not existed");
    }

    res.status(201).json({
      message: "Updated successfully",
      error: false,
      success: true,
      data: product,
    });
  } catch (err) {
    res.status(401).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = updateproduct;
