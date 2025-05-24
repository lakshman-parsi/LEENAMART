import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Editproduct from "../components/editproduct";
import { Inrconvert } from "../components/Inrconverter";
import { MdDelete } from "react-icons/md";
import Allapi from "../common/index";
import { toast } from "react-toastify";
import Deldisply from "../helpers/Deldisply";

const Allproducts = ({ pardata, onclose, productsapi }) => {
  const adminproducts = pardata.data;
  const [editprod, seteditprod] = useState(null);
  const [delclick, setdelclick] = useState(null);
  function oneditclose() {
    seteditprod(null);
  }
  function delhandle() {
    setdelclick(null);
  }

  return (
    <>
      <div className="main flex items-center justify center">
        {adminproducts.map((product, index) => {
          return (
            <>
              <div className="relative prod w-[25%] h-[55%] bg-white p-4 m-4 flex flex-col justify-center items-center">
                <div
                  className="absolute top-1 right-1 text-xl text-red-500 bg-slate-200 rounded-full p-2 cursor-pointer"
                  onClick={() => {
                    setdelclick(product);
                    console.log("click is", delclick);
                  }}
                >
                  <MdDelete />
                </div>
                <img src={product.pimages[0]} className="w-[70%] h-[70%] " />
                <div className="pname font-bold mt-2">{product.pname}</div>
                <div className="price">
                  <b>actual</b>: {Inrconvert(product.actualprice)}
                </div>
                <div className="price">
                  <b>sell:RS</b>
                  {Inrconvert(product.sellprice)}
                </div>

                <div className="w-fit ml-auto bg-red-400 p-3 rounded-full text-xl">
                  <div
                    className="cursor-pointer"
                    onClick={() => seteditprod(product)}
                  >
                    <MdEdit />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {editprod && (
        <Editproduct
          product={editprod}
          oneditclose={oneditclose}
          fetchprod={productsapi}
        />
      )}
      {delclick && (
        <Deldisply
          product={delclick}
          close={delhandle}
          productsall={productsapi}
        />
      )}
    </>
  );
};

export default Allproducts;
