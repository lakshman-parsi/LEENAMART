const mongoose = require("mongoose");

const productsschema = mongoose.Schema(
  {
    pname: String,
    category: String,
    brandname: String,
    description: String,
    pimages: [],
    actualprice: Number,
    sellprice: Number,
  },
  {
    timestamps: true,
  }
);

const productsmdl = mongoose.model("products", productsschema);
module.exports = productsmdl;
