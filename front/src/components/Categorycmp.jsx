import React, { useEffect, useState } from "react";
import Allapi from "../common/index";
import { Link } from "react-router-dom";
const Categorycmp = () => {
  useEffect(() => {
    getallcat();
  }, []);
  const [prodcat, setprodcat] = useState([]);
  const [load, setload] = useState(false);

  async function getallcat() {
    setload(true);
    const cat = await fetch(Allapi.getcatproduct.url);
    const catres = await cat.json();
    setprodcat(catres.data);
    setload(false);
  }

  return (
    <>
      {load ? (
        <>
          <div className="font-bold">Loading.....</div>
        </>
      ) : (
        <>
          <div className="container flex justify-between items-center cursor-pointer overflow-scroll w-full scrollb">
            {prodcat.map((ele, ind) => {
              return (
                <>
                  <Link
                    to={"/Category/" + ele.category}
                    className="sub"
                    key={ele.category}
                  >
                    <div className="img_cont bg-slate-300 rounded-full p-1 w-[50px] h-[50px] md:w-[80px] h-[80px] flex justify-center items-center m-3 overflow-hidden  ">
                      <img
                        src={ele.pimages[0]}
                        className="object-fill w-[50%] h-[70%] mix-blend-multiply  object-scale-down hover:scale-125 transition-transform duration-300 "
                      ></img>
                    </div>
                    <div className="font-bold p-3 text-center capitalize">
                      {ele.category}
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Categorycmp;
