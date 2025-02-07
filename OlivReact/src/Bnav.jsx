import React from "react";
import BnavCom from "./BnavCom";
import NButton from "./NButton";
import Social from "./Social";
import Line from "./components/line";

const Bnav = () => {
  let obj1 = {
    head: "Pages",
    links: ["homes", "services", "about", "jobs", "contacts"],
  };
  let obj2 = {
    head: "CMS",
    links: ["Works", "Single Works", "Blog", "Single", "human", "contacts"],
  };
  let obj3 = {
    head: "Pages",
    links: ["homes", "services", "about", "jobs", "contacts"],
  };
  return (
    <><div className="flex px-10 mt-30 gap-5 ">
        <div className="w-[25vw]   flex flex-col gap-10 py-5 items-start">
           <img className='h-[2.5vw]' src="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg" alt="" />
           <Social />
        </div>
        <div className="flex flex-col gap-10 mb-20">
           <BnavCom obj={obj1} />
           <NButton data="More Templates" />
        </div>
        <BnavCom className="p-10" obj={obj2} />

        <BnavCom className="p-10" obj={obj3} />

     </div><Line  />
     <div className="text-gray-300 flex justify-between px-16 py-5" >
      <h1>© Made by <a  className="text-gray-500 border-b-[1px] " href="#">Pawel Gola</a> - Powered by <a className="text-gray-500 border-b-[1px] " href="#"> Webflow</a></h1>
      <div className="flex gap-5 ">
         <a href="#">Privacy</a>
         <a href="#">Imprint</a>
      </div>
      </div></>

    
  );
};

export default Bnav;
