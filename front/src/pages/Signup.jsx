import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Allapi from "../common";

const Signup = () => {
  const navigate = useNavigate();
  const [istogg, settogg] = useState(false);
  const [isctogg, setctogg] = useState(false);
  const [fdata, fsetdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  function onchangefhandle(e) {
    // console.log(e.target);
    const { name, value } = e.target;
    fsetdata({ ...fdata, [name]: value });
    // console.log("fdata is", fdata);
  }
  async function onhandlefsubmit(e) {
    e.preventDefault();
    // console.log("fdata is", fdata);
    if (fdata.password === fdata.confirmpassword) {
      console.log(Allapi.signup.url);
      const dataresponse = await fetch(Allapi.signup.url, {
        method: Allapi.signup.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(fdata),
      });
      const datar = await dataresponse.json();
      if (datar.success) {
        toast.success(datar.message);
        navigate("/login");
      }
      if (datar.error) {
        toast.error(error.message);
      }
    } else {
      toast.error("password and its confirmation mismatch");
    }
  }
  return (
    <>
      <div className="container  max-w-[500px] mx-auto min-h-[600px] my-11 bg-gray-200 text-black rounded-[20px]">
        <div className="font-bold text-center text-2xl text-black p-3">
          SignUP
        </div>
        <div className="userimg text-7xl block w-fit mx-auto relative  overflow-hidden">
          <FaUserCircle />
        </div>

        <form className="login-form p-10" onSubmit={onhandlefsubmit}>
          <label htmlFor="" className="font-bold mx-auto text-xl">
            Name
          </label>
          <br></br>
          <input
            type="text"
            name="name"
            value={fdata.name}
            onChange={onchangefhandle}
            required
            className="outline-none my-4 w-full h-9 px-3 rounded"
            placeholder="Enter your Name"
          />
          <label htmlFor="" className="font-bold mx-auto text-xl">
            Email:
          </label>
          <br></br>
          <input
            type="mail"
            name="email"
            value={fdata.email}
            required
            onChange={onchangefhandle}
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
              value={fdata.password}
              required
              onChange={onchangefhandle}
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
          <label htmlFor="" className="font-bold text-xl">
            Confirm Password:
          </label>
          <br></br>
          <div className="inputpass flex items-center justify-between px-2 w-full h-9  my-4   bg-white  rounded">
            <input
              type={isctogg ? "text" : "password"}
              name="confirmpassword"
              className="outline-none  "
              value={fdata.confirmpassword}
              required
              onChange={onchangefhandle}
              placeholder="Enter Your Password"
            />

            <div
              onClick={() => {
                setctogg(!isctogg);
              }}
            >
              {isctogg ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>

          <div className="loginbtn flex justify-center my-10">
            <button
              type="submit"
              value="submit"
              className="bg-blue-800 text-center px-5 py-2  rounded-[10px] text-white hover:bg-red-400  hover:text-black hover:scale-125 transition-all"
            >
              Sign UP
            </button>
          </div>
          <div className="lsignin text-center">
            Already have an account?
            <Link to="/login" className="text-red-400 font-bold">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
