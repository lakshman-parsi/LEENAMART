const { Error } = require("mongoose");
const productsmdl = require("../models/products");

async function getcatproducts(req, res) {
  try {
    const cat_prod = await productsmdl.distinct("category");
    const prod_list = [];
    if (!cat_prod) {
      throw new Error("category error");
    }
    for (product of cat_prod) {
      //   console.log(product);
      const item = await productsmdl.findOne({ category: product });
      console.log(item);
      if (item) {
        prod_list.push(item);
      } else {
        throw new Error("no item is present");
      }
    }
    res.status(201).json({
      data: prod_list,
      error: false,
      success: true,
      message: "successfully get categories",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      error: true,
      success: false,
    });
  }
}
module.exports = getcatproducts;
