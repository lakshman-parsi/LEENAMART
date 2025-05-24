import React from "react";
import Horizontalcmp from "./Horizontalcmp";
import Verticalcmp from "./Verticalcmp";

const Productshome = () => {
  return (
    <>
      <Horizontalcmp category={"Speakers"} />
      <Horizontalcmp category={"printers"} />
      <Horizontalcmp category={"Airdopes"} />
      <Horizontalcmp category={"watches"} />
      <Horizontalcmp category={"Earphones"} />
      <Verticalcmp category={"mobile"} />

      <Verticalcmp category={"Refrigerator"} />
    </>
  );
};

export default Productshome;
