import React from "react";

const Sec7com = ({ header, footer, col}) => {
    // console.log(header,footer)
  return (
  <div style={{backgroundColor:col}} className='h-[50vh] px-10 py-7  w-[21.45vw] flex flex-col justify-between '>

       <div>
        {
            header.map((elem)=>{
                return <h1 className="uppercase text-gray-900 tracking-wider text-[12px]">{elem}</h1>
            })
        }
       </div>

     
        <div>
        <h3 className="tracking-tight text-3xl font-light">{footer[0]}</h3>
        <h3 className="tracking-tight text-3xl font-light">{footer[1]}</h3>
        </div>
      

  </div>
  );
};

export default Sec7com;
