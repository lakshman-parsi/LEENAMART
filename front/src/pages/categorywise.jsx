import React from "react";
import { useParams } from "react-router-dom";

const Categorywise = () => {
  const params = useParams();
  console.log("params is", params);
  return <div>{params.categoryname} </div>;
};

export default Categorywise;
