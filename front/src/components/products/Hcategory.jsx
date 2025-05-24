import React, { useEffect, useState, useRef } from "react";
import fetchcategorywise from "../../helpers/fetchcategorywisw";
import { Inrconvert } from "../Inrconverter";
import Addtocart from "../../pages/Addtocart";
import { Link } from "react-router-dom";

const Hcategory = ({ category }) => {
  const scrollref = useRef(null);
  const [catdata, setcatdata] = useState(null); // Initialize as null or appropriate empty state
  const [cart, setcart] = useState(null);
  const [loading, setloading] = useState(true);
  const fetchData = async () => {
    setloading(true);
    const reldata = await fetchcategorywise(category); // Await the fetch
    setcatdata(reldata.data); // Set the fetched data to state
    console.log("Fetched data is", reldata.data);
    setloading(false);
  };
  const arr = new Array(15).fill(null);
  useEffect(() => {
    fetchData(); // Call the async function
  }, []); // Add category as dependency

  if (!catdata) {
    return (
      <div>
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <>
          <div className="head font-bold text-2xl p-4 overflow-scrool  scrollbar-hide scroll-smooth">
            Top Models of {catdata[0].category}
          </div>
          <div
            className="main_cont  mx-5 p-2 flex items-center gap-5 relative"
            ref={scrollref}
          >
            {catdata.map((prod, ind) => {
              return (
                <>
                  <div className="sub  w-[400px] h-[330px] rounded-[20px] bg-slate-200 p-3 flex  items-center">
                    <div className="img_cont bg-slate-300 animation-blink w-[50%] h-[90%] flex justify-center items-center rounded-[23px]">
                      <img
                        className="objext-scale-down  w -[80%] h-[50%] object-contain hover:scale-110 hover:transition-all"
                        alt=""
                      />
                    </div>
                    <div className="det  w-[300px] h-[400px] flex flex-col justify-center gap-3 p-3">
                      <div className="capitalize font-bold text-left text-2xl bg-slate-300 p-3 rounded-full w-[70%]"></div>
                      <div className="capitalize  text-left text-xl p-3 bg-slate-300 rounded-full w-[60%]"></div>
                      <div className=" text-left text-md text-slate-900  line-clamp-2 bg-slate-300 p-3 rounded-[20px] w-[80%] h-[20%]"></div>
                      <div className="prices flex justify-start gap-1 items-center">
                        <div className="text-blue-800 font-bold text-xl bg-slate-300 p-3 rounded-full w-[40%]"></div>
                        <div className=" line-through text-slate-500 bg-slate-300 p-3 rounded-full w-[40%]"></div>
                      </div>
                      <Link
                        to={{
                          pathname: "/cart",
                          state: { product: prod },
                        }}
                      >
                        <button
                          className="p-3 rounded-[13px] bg-slate-300 w-1/2 h-1/2"
                          onClick={() => setcart(prod)}
                        ></button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="head font-bold text-2xl p-4 overflow-scrool  scrollbar-hide scroll-smooth">
            Top Models of {catdata[0].category}
          </div>
          <div className="main_cont mx-5 p-3 sm:flex items-center gap-2 md:grid grid-cols-[repeat(auto-fit,minmax(400px,420px))] justify-between relative">
            {catdata.map((prod, ind) => {
              return (
                <>
                  <div className="sub  w-[400px] h-[330px] rounded-[20px] bg-slate-200 p-3 flex  items-center">
                    <Link
                      to={"/details/" + prod._id}
                      className="img_cont bg-white w-[50%] h-[90%] flex justify-center items-center rounded-[23px]"
                    >
                      <img
                        src={prod.pimages[0]}
                        className="object-scale-down  w -[80%] h-[50%] object-contain hover:scale-110 hover:transition-all"
                        alt=""
                      />
                    </Link>
                    <div className="det  w-[300px] h-[400px] flex flex-col justify-center gap-3 p-3">
                      <div className="capitalize font-bold text-left text-2xl">
                        {prod.pname}
                      </div>
                      <div className="capitalize  text-left text-xl">
                        {prod.category}
                      </div>
                      <div className=" text-left text-md text-slate-900  line-clamp-2">
                        {prod.description}
                      </div>
                      <div className="prices flex justify-start gap-1 items-center">
                        <div className="text-blue-800 font-bold text-xl">
                          {Inrconvert(prod.sellprice)}
                        </div>
                        <div className=" line-through text-slate-500">
                          {Inrconvert(prod.actualprice)}
                        </div>
                      </div>
                      <Link
                        to={{ pathname: "/cart", state: { product: prod } }}
                      >
                        <button
                          className="p-3 rounded-[13px] bg-red-600 hover:bg-red-800 text-white"
                          onClick={() => setcart(prod)}
                        >
                          Add to Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Hcategory;
