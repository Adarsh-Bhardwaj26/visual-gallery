import React from "react";
import Camera from "../assets/Camera.png";
const About = () => {
  return (
    <div className="h-screen overflow-hidden relative ">
      <div className="absolute flex gap-2 inset-0 justify-between px-10">
        <div className="h-full flex flex-col justify-start">
          <h1 className="font-['Anton'] text-[8rem] leading-none text-white/25">
            REDEFINED <br />
            <span className="text-amber-300/25">IMAGINATION</span>
          </h1>
        </div>

        <div className=" h-full  flex items-end pb-12 ">
          <h1 className="font-['Anton'] text-[8rem] leading-none text-white/25">
            BEYOND <br />
            <span className="text-amber-300/25">REALITY</span>
          </h1>
        </div>
      </div>
      <img
        src={Camera}
        className="h-full absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt=""
      />
    </div>
  );
};

export default About;
