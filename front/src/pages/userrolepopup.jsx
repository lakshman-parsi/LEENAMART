import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Allapi from "../common/index";
import { toast } from "react-toastify";

const userrolepopup = ({ user, close }) => {
  const roles = ["General", "Admin"];
  var [role, setrole] = useState("");
  // var [clicked, setclicked] = useState(false);

  async function rolechange(cuser) {
    if (role === "" || role === null) {
      role = "General";
      console.log("general changed");
      console.log("role change is", role);
    }
    console.log("role is", role);
    console.log("cuser.user is", cuser.user);
    const roleapi = await fetch(Allapi.changerole.url, {
      method: Allapi.changerole.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: cuser.user._id,
        newrole: role,
      }),
    });
    const result = await roleapi.json();
    console.log("result is", result);
    if (result.success) {
      toast.success(result.message);
    }
    if (result.error) {
      toast.error(result.message);
    }
  }

  return (
    <div className="container w-[50%] h-[250px] bg-white p-5  mx-auto flex relative  flex-col items-center justify-start gap-5 ">
      <RxCross1
        className=" font-bold text-red-800 absolute top-2 right-2"
        onClick={close}
      />
      <div className="subcont ">
        <div className="name mt-2 font-bold">Name:{user.name}</div>
        <div className="name mt-2 font-bold">Email:{user.email}</div>
        <div className="editrole mt-2">
          <label htmlFor="">Roles:</label>
          <select
            name="Role"
            onChange={(e) => {
              console.log(e.target.value);
              setrole(e.target.value);
            }}
          >
            {roles.map((ele) => {
              return (
                <option className=" w-full" value={ele}>
                  {ele}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="submit  block mx-auto my-[70px] bg-red-600 px-3 py-2 rounded-[10px] text-white font-bold hover:bg-blue-400"
          onClick={() => rolechange({ user })}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default userrolepopup;
