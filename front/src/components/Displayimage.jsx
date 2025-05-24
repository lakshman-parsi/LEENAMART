import React from "react";
import { RxCross2 } from "react-icons/rx";

const Displayimage = ({ onclose, imgurl }) => {
  return (
    <div className="imgview absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-slate-800 bg-opacity-35">
      <div className="cont relative flex justify-center items-center bg-white max-w-[50%] min-h-[80%] p-5 ">
        <RxCross2
          className="text-3xl bg-red-500 w-fit block ml-auto text-white  p-2 m-2   absolute top-0 right-0 rounded-[30px]"
          onClick={onclose}
        />

        <img src={imgurl} alt="" className="w-[70%] h-[70%]" />
      </div>
    </div>
  );
};

export default Displayimage;
