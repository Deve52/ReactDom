import React from 'react'

const Sec13com = ({image, h1data}) => {
  return (
   
    <div className='w-[20vw] flex flex-col gap-3'>
    <div className='fourimg h-[40vh]   overflow-hidden'>
        <img className='object-cover h-full w-full hover:scale-[110%] ' src={image} alt="" />

    </div>
    <h1 className='text-[2.7vh] font-[300]'>{h1data}</h1>
   {/* //span tag lagaya tha uma a ko rka tha/ */}
     <a  className='sec13A text-[2.5vh] font-[400]   w-fit' href="#">Read More</a>
    </div>



  )
}

export default Sec13com
