import React from 'react'

const Sec5com = ({obj}) => {
    
  return (
    <div className='  h-full w-[45vw] '>
                <div className="h-full w-full overflow-hidden imgBox">
                    <img className='object-cover hover:scale-[110%]  w-full' src={obj.url} alt="" />
                    </div>
                <div className="mt-2 imgDis flex justify-between items-center"> 
                    <h1 className='text-2xl font-[350] cursor-pointer'>{obj.name}</h1>
                    <button className='cursor-pointer rounded-full px-3 py-1 '>{obj.job}</button>

                </div>
            </div>
  )
  {let cursor=React.createElement("div",{className:"h-10 w-10 bg-black rounded-full"},null)
  let imgBox=document.querySelector(".imgBox img")
  
  imgBox.addEventListener("mousemove",(dets)=>{
      console.log(dets)
  
  })}
}

export default Sec5com
