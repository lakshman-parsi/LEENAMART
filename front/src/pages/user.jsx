import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const User = () => {
  const user = useSelector((state) => state.user.user);
  console.log("user is", user);
  return (
    <>
      {user ? (
        <div className="flex flex-col gap-5 h-screen w-full items-center justify-center bg-slate-900">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none"></span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
            {`Hai , ${user.name.toUpperCase()}`}
            <br></br>
            Welcome to This Site
          </h1>
          <div className="btn">
            <Link
              to="/home"
              className="text-center px-4 py-3 bg-yellow-400 rounded-[15px] font-bold  hover:bg-orange-600"
            >
              Shop Now
            </Link>
          </div>
          {user.role === "Admin" ? (
            <div className="btn my-4">
              <Link
                to="/admin"
                className="text-center px-4 py-3 my-3 bg-yellow-400 rounded-[15px] font-bold  hover:bg-orange-600"
              >
                Admin Panel
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-9 h-screen w-full items-center justify-center bg-slate-900">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none"></span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
            YOU NEED TO LOGIN
          </h1>

          <div className="btn">
            <Link
              to="/login"
              className="text-center px-4 py-3 bg-yellow-400 rounded-[15px] font-bold  hover:bg-orange-600"
            >
              Login
            </Link>
          </div>
          <div className="btn-1">
            <Link
              to="/signup"
              className="text-center px-4 py-3 bg-yellow-400 rounded-[15px] font-bold  hover:bg-orange-600"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
