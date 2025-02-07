import React from "react";
import Social from "./Social";
// let img = document.querySelector(".pic");//we are using react and features of virtual dom not regular dom.

const Sec10com = ({arr,name,post}) => {
    // console.log(arr)
    let count=-1;
  return arr.map((imgurl) => {
    // console.log(imgurl)//same show kr rha ha ye
    {count++}
    return (
      <div className="h-[65vh] w-[22vw]  ">
        <div className="pic h-[58vh] w-full bg-red-800" style={{backgroundImage:`url(${imgurl})`}}>
          
          <Social />
        </div>
        <div className="p-1 flex h-[7vh] w-full justify-between items-center">
          <h1 className="text-[17px] text-gray-900 tracking-wide">{name[count]}</h1>
          <h1 className="teamRole px-2 text-gray-600 py-1 rounded-full text-[12px]">
          { post[count]}
          </h1>
        </div>
      </div>
    );
    
  });
};

export default Sec10com;
