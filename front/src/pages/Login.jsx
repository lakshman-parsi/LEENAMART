import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Allapi from "../common";
import { toast } from "react-toastify";
import mycontext from "../context";
import { useContext } from "react";

const Login = () => {
  const navigatex = useNavigate();
  const { fetchuserdetails } = useContext(mycontext);

  const [istogg, settogg] = useState(false);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  function onchangehandle(e) {
    // console.log(e.target);
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
    console.log(data);
  }
  async function onhandlesubmit(e) {
    e.preventDefault();
    try {
      const datares = await fetch(Allapi.signin.url, {
        method: Allapi.signin.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // if (!datares.ok) {
      //   throw new Error(`HTTP error! Status: ${datares.status}`);
      // }

      const dataApi = await datares.json();
      // console.log("data API IS", dataApi);

      if (dataApi.success) {
        toast.success(dataApi.message);
        fetchuserdetails();
        navigatex("/user");
      } else if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      toast.error("Failed to fetch data. Please try again later.");
    }
  }

  // async function onhandlesubmit(e) {
  //   e.preventDefault();
  //   const datares = await fetch(Allapi.signin.url, {
  //     method: Allapi.signin.method,
  //     credentials: "include",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   const dataApi = await datares.json();
  //   console.log(dataApi);
  //   if (dataApi.status) {
  //     toast.success(dataApi.message);
  //     navigate("/home");
  //   }
  //   if (dataApi.error) {
  //     toast.error(dataApi.message);
  //   }
  // }

  return (
    <>
      <div className="container max-w-[500px] mx-auto min-h-[600px] my-11 bg-gray-200 text-black rounded-[20px]">
        <div className="font-bold text-center text-2xl text-black p-3">
          Login
        </div>
        <form className="login-form p-20 " onSubmit={onhandlesubmit}>
          <label htmlFor="" className="font-bold mx-auto text-xl">
            Email:
          </label>
          <br></br>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onchangehandle}
            className="outline-none my-4 w-full h-9 px-3 rounded"
            placeholder="Enter your Mail"
          />
          <label htmlFor="" className="font-bold text-xl">
            Password:
          </label>
          <br></br>
          <div className="inputpass flex items-center justify-between px-2 w-full h-9  my-4   bg-white  rounded">
            <input
              type={istogg ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={onchangehandle}
              className="outline-none  "
              placeholder="Enter Your Password"
            />
            <div
              onClick={() => {
                settogg(!istogg);
              }}
            >
              {istogg ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <Link
            to="/forgotpassword"
            className="block  mx-auto hover:underline hover:text-red-500"
          >
            Forgot password
          </Link>

          <div className="loginbtn flex justify-center my-10">
            <button
              className="bg-blue-800 text-center px-5 py-2  rounded-[10px] text-white hover:bg-red-400  hover:text-black hover:scale-125 transition-all"
              type="submit"
              value="submit"
            >
              Login
            </button>
          </div>
          <div className="lsignin text-center">
            Don't have an account?
            <Link to="/signup" className="text-red-400 font-bold">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
