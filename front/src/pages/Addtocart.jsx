import React from "react";
import { BsHandbagFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
const Addtocart = () => {
  const location = useLocation();
  const pc = location.state;

  console.log("pc is", pc);

  return (
    <>
      <div className="cart_head flex justify-center items-center my-4 gap-2">
        <div className="text-3xl font-bold">
          <BsHandbagFill />
        </div>
        <div className="text-3xl font-bold">My Cart</div>
        {/* <div className="cont">{product?.pname}</div> */}
      </div>
    </>
  );
};

export default Addtocart;
