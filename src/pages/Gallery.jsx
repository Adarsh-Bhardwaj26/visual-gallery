import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '../components/Card.jsx'
const Gallery = () => {

  const [ImageData, SetImageData] = useState([]);
  const [index, setIndex] = useState(1);
  let printImageData = (
    <h2 className="fixed top-1/2 -translate-x-1/2 text-xl -translate-y-1/2 text-gray-50 font-semibold left-1/2 ">
      Loading...
    </h2>
  );
  const getData = async () => {
    const response = await axios(
      `https://picsum.photos/v2/list?page=${index + 1}&limit=14`,
    );
    SetImageData(response.data);
  };
  if (ImageData.length > 1) {
    printImageData = (
      <div className="px-4 py-5 flex flex-wrap justify-center  gap-8">
        {ImageData.map((element, idx) => {
          return (
            <div key={idx}>
                 <Card element={element}></Card>
            </div>
          );
        })}
      </div>
    );
  }
  useEffect(() => {
    SetImageData([]);
    getData();
  }, [index]);
  return (
    <div className="h-full overflow-auto relative">
      {printImageData}
      <div className="flex justify-around gap-5 fixed bottom-10 left-0 w-full">
        <button
         style={{opacity:index==1?0.5:1}}
          className="px-4 py-2 font-semibold bg-amber-300 text-black rounded-xl active:scale-95"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
            
          }}
        >
          Prev
        </button>
        
        <h2 className="bg-white px-3 py-2 text-black rounded-xl font-semibold"> {index}</h2>
        <button
          className="px-4 py-2 font-semibold bg-amber-300 text-black rounded-xl active:scale-95"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Gallery
