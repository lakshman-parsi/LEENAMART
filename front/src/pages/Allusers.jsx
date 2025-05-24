import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Allapi from "../common/index";
import { MdEdit } from "react-icons/md";
import Userrolepopup from "./userrolepopup";

const Allusers = () => {
  const user = useSelector((state) => state.user.user);
  const [allusers, setusers] = useState([]);
  const [curruser, setcurruser] = useState(null);

  const alluse = async () => {
    try {
      const response = await fetch(Allapi.allusers.url, {
        method: Allapi.allusers.method,

        credentials: "include",
      });
      const alldata = await response.json();
      console.log("All users data is", alldata);
      if (alldata.success) {
        setusers(alldata.data); // Assuming `alldata.data` contains the user list
      } else {
        toast.error("Error retrieving data");
      }
    } catch (error) {
      console.error("Error fetching all users data:", error);
      toast.error("Failed to fetch user data");
    }
  };

  useEffect(() => {
    alluse();
  }, []);
  function closepopup() {
    setcurruser(null);
  }

  return (
    <>
      {user ? (
        user.role !== "Admin" ? (
          <div className="msg text-3xl  text-white font-bold text-center">
            You are not authorized to access this page
          </div>
        ) : (
          <div className="m-[200px] flex flex-col justify-center items-start">
            <div className="userdata m-4 bg-slate-200 min-w-[600px] text-center  mb-4">
              <table className="table usertable w-full ">
                <thead className="bg bg-slate-100 ">
                  <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Edit Role</th>
                  </tr>
                </thead>
                <tbody>
                  {allusers.map((ele, index) => (
                    <tr key={ele._id}>
                      <td>{index + 1}</td>
                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>{ele.role}</td>
                      <td>
                        <div
                          onClick={() => {
                            setcurruser(ele);
                            console.log(ele);
                          }}
                        >
                          <MdEdit className="text-green-600 cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {curruser && <Userrolepopup user={curruser} close={closepopup} />}
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Allusers;
