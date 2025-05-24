import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Allapi from "../common";
import { RxCross2 } from "react-icons/rx";
import category from "./productscategory";
import { FaCloudUploadAlt } from "react-icons/fa";
import imgupload from "./imgupload";
import Displayimage from "./Displayimage";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Editproduct = ({ product, oneditclose, fetchprod }) => {
  const user = useSelector((state) => state.user.user);

  const [pdata, setpdata] = useState({
    pname: product.pname,
    category: product.category,
    brandname: product.brandname,
    description: product.description,
    pimages: product.pimages,
    actualprice: product.actualprice,
    sellprice: product.sellprice,
  });
  const [imgdta, setimgdata] = useState("");
  const [imgview, setimgview] = useState("");

  function onimgclose() {
    setimgview("");
  }
  function ondelimg(ind) {
    // pdata.pimages.splice(ind, 1);
    const newarray = pdata.pimages;
    newarray.splice(ind, 1);
    console.log("new array is", newarray);
    setpdata((prev) => {
      return {
        ...prev,
        pimages: newarray,
      };
    });
  }
  function handleonchange(e) {
    const { name, value } = e.target;
    setpdata({ ...pdata, [name]: value });
  }
  async function handlesubmit(e) {
    e.preventDefault();

    if (user.role == "Admin") {
      const editres = await fetch(Allapi.editproduct.url, {
        method: Allapi.editproduct.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...pdata, _id: product._id }),
      });
      const update = await editres.json();
      if (update.success) {
        toast.success(update.message);
        fetchprod();
        oneditclose();
      }
      if (update.error) {
        toast.error(update.message);
      }
    } else {
      toast.error(" YOU ARE NOT  AUTHORIZED");
    }
    console.log("edited is", pdata);
  }
  async function handleimgs(e) {
    const file = e.target.files[0];
    setimgdata(file);
    console.log("images is selected", file);
    const resdata = await imgupload(file);

    console.log("resdata is", resdata.url);
    setpdata((prev) => {
      return {
        ...prev,
        pimages: [...prev.pimages, resdata.url],
      };
    });
  }
  return (
    <>
      <div className="maincont absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-35 flex  justify-center items-center">
        <div className="subcont  w-[45%] h-[80%] relative bg-white p-4 rounded-[12px] overflow-hidden">
          <div className="text-xl font-bold  text-red-500">Edit Product</div>
          <RxCross2
            className="text-3xl bg-red-500 w-fit block ml-auto text-white  p-2 m-2  absolute top-0  right-0 rounded-[30px] cursor-pointer"
            onClick={oneditclose}
          />

          <form
            className="grid p-3 gap-2 overflow-y-auto h-full pb-10"
            onSubmit={handlesubmit}
          >
            <label htmlFor="pname" className="font-semibold">
              Product Name
            </label>
            <input
              type="text"
              id="pname"
              name="pname"
              required
              value={pdata.pname}
              className="bg-slate-100 h-9 p-2 rounded w-full"
              placeholder="Enter product name"
              onChange={handleonchange}
            />
            <label htmlFor="bname" className="font-semibold">
              Brand Name
            </label>
            <input
              type="text"
              id="bname"
              name="brandname"
              required
              value={pdata.brandname}
              className="bg-slate-100 h-9 p-2 rounded w-full"
              placeholder="Enter Brand name"
              onChange={handleonchange}
            />
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              rows={5}
              cols={10}
              type="text"
              required
              id="description"
              name="description"
              value={pdata.description}
              className="bg-slate-100 h-20 p-2 rounded w-full resize-none"
              placeholder="Enter Description here"
              onChange={handleonchange}
            />
            <label htmlFor="category" className="font-semibold">
              category
            </label>
            <select
              name="category"
              id="category"
              required
              className="bg-slate-100 h-9 p-2 rounded w-full"
              onChange={handleonchange}
            >
              <option name="category" value={"category"}>
                {product.category}
              </option>
              {category.map((ele, ind) => {
                return (
                  <option value={ele.value} key={ele.id}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="category" className="font-semibold">
              Product images
            </label>
            <label htmlFor="pimages">
              <div className="bg-slate-100 h-20 p-2 rounded w-full flex flex-col justify-center items-center">
                <span className="text-2xl text-opacity-35">
                  <FaCloudUploadAlt />
                </span>
                <div>Upload Produts</div>
                <input
                  type="file"
                  id="pimages"
                  className="hidden"
                  onChange={handleimgs}
                />
              </div>
            </label>
            <div className="ima flex p-2 gap-2">
              {pdata.pimages[0] ? (
                <>
                  {pdata.pimages.map((el, ind) => {
                    return (
                      <>
                        <div className="relative group">
                          <img
                            src={el}
                            width={80}
                            height={80}
                            alt="img"
                            className=" bg-slate-100 border cursor-pointer "
                            onClick={() => {
                              console.log("el is ", el);
                              setimgview(el);
                            }}
                          />
                          <span
                            className=" absolute top-0 right-0 text-red-700 hidden group-hover:block "
                            onClick={() => {
                              ondelimg(ind);
                            }}
                          >
                            <MdDelete />
                          </span>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <div className="msg text-red-500 text-xl">
                  Please upload image
                </div>
              )}
            </div>
            <label htmlFor="price" className="font-semibold">
              Actual Price
            </label>
            <input
              type="number"
              id="price"
              name="actualprice"
              required
              placeholder="Enter actual price"
              value={pdata.actualprice}
              className="bg-slate-100 h-9 p-2 rounded w-full"
              onChange={handleonchange}
            />
            <label htmlFor="sprice" className="font-semibold">
              Selling Price
            </label>
            <input
              type="number"
              id="sprice"
              name="sellprice"
              required
              placeholder="Enter selling price"
              value={pdata.sellprice}
              className="bg-slate-100 h-9 p-2 rounded w-full"
              onChange={handleonchange}
            />
            <div>
              <button
                type="submit"
                className="w-full h-7 bg-red-600 text-white hover:bg-red-950 hover:font-bold cursor-pointer"
              >
                Update product
              </button>
            </div>
          </form>
        </div>
      </div>
      {imgview !== "" ? (
        <Displayimage imgurl={imgview} onclose={onimgclose} />
      ) : (
        ""
      )}
    </>
  );
};

export default Editproduct;
