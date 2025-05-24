import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import React, { useEffect, useState } from "react";

const Adminpanel = () => {
  const [puser, setpuser] = useState({});
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user) {
      setpuser(user);
    }
  }, [user]);
  console.log("puser is", puser);

  return (
    <>
      <div className="min-h-[calc(100vh-130px)] w-[100vw] bg-red-800 flex  ">
        <aside className=" hidden  fixed left-0 sidebar min-w-[200px] h-screen bg-blue-950 text-white flex-col gap-2 items-center justify-start  md:flex ">
          <div className="name capitalize font-bold text-2xl  py-3">
            {puser.name}
          </div>
          <div className="role text-xl">{puser.role}</div>
          <div className="flex flex-col w-full px-2">
            <Link
              to={"allusers"}
              className="py-3 hover:bg-blue-300  hover:text-black hover:font-bold my-2"
            >
              All users
            </Link>
            <Link
              to={"productup"}
              className="py-3 hover:bg-blue-300  hover:text-black hover:font-bold my-2"
            >
              Upload Product
            </Link>
            <Link
              to={"products"}
              className="py-3 hover:bg-blue-300  hover:text-black hover:font-bold my-2"
            >
              All products
            </Link>
          </div>
        </aside>
        <main className=" min-w-[85%] ">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Adminpanel;
