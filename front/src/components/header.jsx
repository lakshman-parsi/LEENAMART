import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "./logo.png";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Allapi from "../common/index";
import { setuserDetails } from "../store/userslice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const onlogout = async () => {
    const outres = await fetch(Allapi.logout.url, {
      method: Allapi.logout.method,
      credentials: "include",
    });
    const resout = await outres.json();
    console.log(resout);
    if (resout.success) {
      toast.success(resout.message);
      dispatch(setuserDetails(null));
    }
    if (resout.error) {
      toast.error(resout.message);
    }
  };

  return (
    <>
      <header className="h-16 shadow-md m-0 p-0 fixed z-50 w-full bg-white">
        <div className="container mx-auto flex items-center py-2 justify-between ">
          <div className="logon ">
            <Link to="/">
              <img src={Logo} alt="" width="100px" height="80px" />
            </Link>
          </div>
          <div className="hidden md:flex items-center min-w-[450px] h-[40px] content-end justify-between border rounded-r-full focus-within:shadow-md">
            <input
              type="text"
              placeholder="search for products.... "
              className="outline-none px-5   "
            />
            <div className="slog bg-red-600  min-w-[50px] h-full text-white rounded-r-full">
              <FaSearch className="h-[30px] mx-auto my-1" />
            </div>
          </div>
          <div className="icons flex items-center justify-center gap-7">
            <div className="user text-3xl">
              <Link to="/user">
                <FaUserCircle />
              </Link>
            </div>
            <div className="cart text-3xl relative">
              <FaShoppingCart />
              <div className="count text-xl bg-red-600  px-2 rounded-[40px] text-white absolute -top-1 left-5">
                0
              </div>
            </div>
            {user ? (
              <>
                <div className="logbtn">
                  <Link
                    onClick={onlogout}
                    to="/login"
                    className="bg-red-500 px-4 py-1 rounded-xl text-white hover:bg-blue-600"
                  >
                    Logout
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="logbtn">
                  <Link
                    to="/user"
                    className="bg-red-500 px-4 py-1 rounded-xl text-white hover:bg-blue-600"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
