import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
const Main_pg = () => {
  const [image, setImage] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    axios("https://picsum.photos/v2/list?page=3&limit=8").then((res) =>
      setImage(res.data),
    );
  }, []);

  const positions = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * 2 * Math.PI;
    return {
      X: Math.cos(angle) * 390,
      Y: Math.sin(angle) * 390,
      rotate: (angle * 180) / Math.PI + 90,
    };
  });

  let printImageData = (
    <h2 className="fixed top-1/2 -translate-x-1/2 text-xl -translate-y-1/2 text-gray-50 font-semibold left-1/2 ">
      Loading...
    </h2>
  );
  if (image.length > 1) {
    printImageData = (
      <>
        <div
          className="absolute w-0 h-0"
          style={{
            top: "75%",
            left: "50%",
            animation: "spin 50s linear infinite",
          }}
        >
          {positions.map((position, index) => (
            <div
              key={index}
              className="h-44 w-40 rounded-xl absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: position.X,
                top: position.Y,
                transform: `  rotate(${position.rotate}deg)`,
              }}
            >
              <img
                src={image[index]?.download_url}
                alt=""
                className="object-cover h-full w-full rounded-xl"
              />
            </div>
          ))}
        </div>

       <div className="flex justify-center items-center
gap-5 flex-col absolute top-[70%]
left-1/2 -translate-x-1/2 -translate-y-1/2
text-center w-[49%] px-5">
          <h2 className="font-['Anton'] text-5xl text-white  tracking-wide ">
            A <span className="text-amber-300 text-6xl">Gallery</span> That Captures Imagination
          </h2>
          <p className="text-white tracking-wide font-[inter]">
            Visuals crafted to inspire creativity and spark imagination.
          </p>
          <h1 onClick={()=>{
            navigate('/Gallery')
          }} className="bg-amber-300 w-fit px-4 py-2 text-black  font-semibold rounded-full cursor-pointer">
            Explore Now
          </h1>
        </div>
      </>
    );
  }
  return (
    <div className="relative h-full overflow-hidden">
      {printImageData}
      <style>{`
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
 
`}</style>
    </div>
  );
};

export default Main_pg;
