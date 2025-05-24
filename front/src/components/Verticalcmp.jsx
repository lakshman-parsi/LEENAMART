import React, { useEffect, useState, useRef } from "react";
import fetchcategorywise from "../helpers/fetchcategorywisw";
import { Inrconvert } from "./Inrconverter";
import Addtocart from "../pages/Addtocart";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Verticalcmp = ({ category }) => {
  const scrollref = useRef(null);
  const [catdata, setcatdata] = useState(null); // Initialize as null or appropriate empty state
  const [cart, setcart] = useState(null);
  const fetchData = async () => {
    const reldata = await fetchcategorywise(category); // Await the fetch
    setcatdata(reldata.data); // Set the fetched data to state
    console.log("Fetched data is", reldata.data);
  };
  useEffect(() => {
    fetchData(); // Call the async function
  }, []); // Add category as dependency

  if (!catdata) {
    return <div>Loading...</div>; // Show a loading state until data is fetched
  }
  const scrollLeft = () => {
    scrollref.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    scrollref.current.scrollLeft += 200;
  };

  return (
    <>
      <div className="head font-bold text-2xl p-4 overflow-scrool  scrollb">
        Top Models of {catdata[0].category}
      </div>
      <div
        className="main_cont  mx-5 p-2 flex  items-center gap-5 relative "
        ref={scrollref}
      >
        <div className="absolute z-10 text-xl w-full flex justify-between  ">
          <button className="rounded-full p-2">
            <FaChevronLeft onClick={scrollLeft} />
          </button>
          <button className=" rounded-full p-2">
            <FaChevronRight onClick={scrollRight} />
          </button>
        </div>
        {catdata.map((prod, ind) => {
          return (
            <>
              <div className="sub  w-[400px] h-[400px] rounded-[20px] bg-slate-200 p-5 flex flex-col items-center">
                <Link
                  to={"/productdetails/" + prod._id}
                  className="img_cont bg-white w-[90%] h-[40%] flex justify-center items-center rounded-[23px] p-1"
                >
                  <img
                    src={prod.pimages[0]}
                    className="objext-scale-down  w -[50%] h-[90%] object-contain hover:scale-110 hover:transition-all"
                    alt=""
                  />
                </Link>

                <div className="det  w-[300px] h-[400px] flex flex-col justify-center gap-2 mt-2">
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
                  <Link to={{ pathname: "/cart", state: { product: prod } }}>
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
  );
};

export default Verticalcmp;
