import React from "react";
import { MdDelete } from "react-icons/md";
import Allapi from "../common/index";
import { toast } from "react-toastify";

const Deldisply = ({ product, close, productsall }) => {
  async function delprod() {
    console.log("execute");
    const delres = await fetch(Allapi.deleteproduct.url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: product._id }),
    });
    const res = await delres.json();
    if (res.success) {
      toast.success("Product deleted");
      productsall(  );
      close(); // Close the modal after successful deletion
    } else {
      toast.error("Delete error");
    }
  }

  return (
    <>
      <div className="container absolute top-0 right-0 h-full left-0 bottom-0 bg-black bg-opacity-35 flex justify-center items-center">
        <div className="bh bg-white rounded-[20px]">
          <div className="del_sub_cont w-[90%] h-[40%]  font-bold p-5">
            Do you want to delete this product?
          </div>
          <div className="butt flex justify-between items-center p-5 ">
            <button
              className="bg-opacity-25  font-semibold p-2 rounded-[9px] border-red-600 border-2 hover:bg-red-600 hover:text-white"
              onClick={close} // Pass the function reference, not invoke it
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white font-bold p-2 rounded-[10px] hover:bg-red-800"
              onClick={delprod} // Call delprod function on click
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deldisply;
