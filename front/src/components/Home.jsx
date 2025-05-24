import React, { useEffect, useState } from "react";
import Allapi from "../common/index";
import { Link } from "react-router-dom";
import Categorycmp from "./Categorycmp";
import Sliding from "./Sliding";
import Productshome from "./ProductsHome";
const Home = () => {
  return (
    <>
      <Categorycmp />
      <Sliding />
      <Productshome />
    </>
  );
};

export default Home;
