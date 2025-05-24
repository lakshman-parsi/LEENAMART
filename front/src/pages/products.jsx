import React, { useEffect, useState } from "react";
import Allapi from "../common/index";
import Allproducts from "./Allproducts";
const Products = () => {
  const [allproducts, setallproducts] = useState(null);
  async function fetchproducts() {
    const getproducts = await fetch(Allapi.allproducts.url);
    const result = await getproducts.json();
    console.log("all products is", result);
    setallproducts(result);
  }
  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    allproducts && (
      <Allproducts
        pardata={allproducts}
        productsapi={fetchproducts}
        onclose={() => {
          setallproducts(null);
        }}
      />
    )
  );
};

export default Products;
