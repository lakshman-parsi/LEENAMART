import React from "react";
import Uploadcmp from "../components/uploadcmp";
import { useState } from "react";

const Productupload = () => {
  const [upload, setupload] = useState(false);

  function onclose() {
    setupload(!upload);
  }
  return (
    <>
      <div className="container w-full my-2 py-2 flex justify-around  items-center bg-slate-400">
        <div className="txt font-bold text-lg">Upload products</div>
        <button
          className="btn py-2 px-3 border-red-500 border-2 text-red-900 
       rounded-[20px]  hover:bg-red-500 hover:text-white hover:font-bold transition-all "
          onClick={() => setupload(!upload)}
        >
          Upload
        </button>
      </div>
      {upload && <Uploadcmp onclose={onclose} />}
    </>
  );
};

export default Productupload;
