import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Allapi from "../common/index";
import { Inrconvert } from "./Inrconverter";
import Verticalcmp from "./Verticalcmp";

const Prodv_details = () => {
  const [det, setdet] = useState({
    pname: "",
    category: "",
    brandname: "",
    description: "",
    pimages: [],
    actualprice: "",
    sellprice: "",
  });
  const [active, setactive] = useState(det.pimages[0]);
  const [select, setselect] = useState();

  const para = useParams();
  console.log("params is", para);
  function onhover(imgurl) {
    setactive(imgurl);
  }
  async function fetchproduct() {
    const prod_data = await fetch(Allapi.prod_det.url, {
      method: Allapi.prod_det.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id: para.product }),
    });
    const prod_res = await prod_data.json();
    setdet(prod_res.data);
    setactive(prod_res.data.pimages[0]);
    console.log("data is", det);
  }
  console.log("active ima", active);

  useEffect(() => {
    fetchproduct();
  }, []);
  return (
    <>
      <div className="bg-gray-100 p-4 ">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold capitalize">
              newly launched {det.pname}
            </h1>
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Cart (2)
            </button> */}
          </div>
          <div className="flex justify-center h-[700px]">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-4 w-[1000px] h-[1000px]">
              <div className="flex flex-col gap-4 ">
                <div className="w-[300px] h-[500px]  p-3">
                  <img
                    src={active}
                    alt="Product Image"
                    className="w-full rounded-lg object-fill cursor-pointer w-[70%] h-[100%] "
                  />
                </div>
                <div className="flex gap-4 ">
                  {det.pimages.map((img, ind) => {
                    return (
                      <div className="w-[100px] h-[120px] ">
                        <img
                          key={ind}
                          src={img}
                          alt="Product Image"
                          className={`w-20 h-[100%] p-3 cursor-pointer rounded-lg object-cover  ${
                            active === img ? "border-blue-500 border-2" : ""
                          }`}
                          onMouseOver={() => onhover(img)}
                          onClick={() => onhover(img)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="ml-5 flex flex-col gap-2">
                <div className="name text-2xl font-bold capitalize">
                  {det.pname}
                </div>
                <div className=" text-xl font-semibold capitalize">
                  {det.brandname}
                </div>
                <div className="  capitalize">{det.description}</div>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold">
                        {Inrconvert(det.sellprice)}
                      </div>
                      <div className="line-through text-gray-500">
                        {Inrconvert(det.actualprice)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Add to cart
                    </button>
                    <button className="bg-red-400 text-black px-4 py-2 rounded-md hover:bg-red-500 font-bold ">
                      Buy now
                    </button>
                    <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
                      Add to wishlist
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L11.414 12H17a1 1 0 100-2H11.414l2.293-2.293a1 1 0 00-1.414-1.414l-4 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Worldwide shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm10-1a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7a1 1 0 10-2 0V8zm-6 3a1 1 0 100 2h2a1 1 0 100-2H9zm4 0a1 1 0 100 2h2a1 1 0 100-2h-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Secure payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371.26 1.538.588l1.292 1.292c.15.15.15.387 0 .538l-1.292 1.292a1 1 0 00.588 1.538h3.462c.969 0 1.371.26 1.538.588l1.07 3.292a1 1 0 00.95.69h3.462a1 1 0 00.894-.553l3.076-9.232c.283-.84.118-1.84-.553-.894H14.538a1 1 0 00-.69-.95l-3.292-1.07c-.3-.921-1.603-.921-1.902 0L9.049 2.927zM6 11l-5 5v-5zM7 9l-1 4h12l-1-4z" />
                    </svg>
                    <span className="text-gray-700"> warranty Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {det.category && <Verticalcmp category={det.category} />}
    </>
  );
};

export default Prodv_details;
