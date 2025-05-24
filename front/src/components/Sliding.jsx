import React, { useEffect, useState } from "react";
import img1 from "../assest/banner/img1.webp";
import img1_mobile from "../assest/banner/img1_mobile.jpg";
import img2 from "../assest/banner/img2.webp";
import img3 from "../assest/banner/img3.jpg";

import img4 from "../assest/banner/img4.jpg";

import img5 from "../assest/banner/img5.webp";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Sliding = () => {
  const [trans, settrans] = useState(0);
  const deskimages = [img1, img2, img3, img4, img5];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (trans < deskimages.length - 1) {
  //       settrans(trans + 1);
  //     } else {
  //       settrans(0);
  //     }
  //     return () => clearInterval(interval);
  //   }, 4000);
  // }, [trans]);
  function nexttrans() {
    if (trans < deskimages.length - 1) {
      settrans((prev) => prev + 1);
    } else {
      settrans(0);
    }
  }
  function prevtrans() {
    if (trans != 0) {
      settrans((prev) => prev - 1);
    } else {
      settrans(deskimages.length - 1);
    }
  }

  return (
    <div
      className="scroll_cont  mx-auto
     my-2  rounded overflow-hidden "
    >
      <div className="flex_cont w-full mx-auto h-64 md:h-96 relative flex items-center">
        <div className="absolute z-10 text-xl w-full flex justify-between  ">
          <button className="bg-white rounded-full p-2" onClick={prevtrans}>
            <FaChevronLeft />
          </button>
          <button className="bg-white rounded-full p-2" onClick={nexttrans}>
            <FaChevronRight />
          </button>
        </div>
        <div className="flex w-full h-full">
          {deskimages.map((image, ind) => {
            return (
              <div
                className="img_cont w-full h-full min-w-full min-h-full transition-all"
                key={ind}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full"
                  style={{ transform: `translate(-${trans * 100}%)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sliding;

{
  /* <Horizontalcmp category={"Speakers"} />
            <Horizontalcmp category={"printers"} />
            <Horizontalcmp category={"airpones"} />

            <Horizontalcmp category={"watches"} />
            <Horizontalcmp category={"Airdopes"} /> */
}
