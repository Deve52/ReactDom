import React from 'react'

const Sec11com = ({imgsrc,h1data , p1, p2}) => {//jab bhi component banaoo aur arguments loo tho wo ek object ke rup ma atte ha tho unhe hame distruct krna padta ha.

            
      

  return (
    <div className='flex justify-end items-start gap-[10vw] my-20'>
        <img className='mt-4' src={imgsrc} alt="" />
        <div className='w-[50vw] flex flex-col gap-5 '>
            <h1 className='font-light text-[2.5vw] leading-[6.5vh]'>{h1data}</h1>
            <p  className='text-[1.2vw] font-light text-gray-950 w-[90%]' >{p1}</p>
            <p className='text-[1.2vw] font-light text-gray-950 w-[90%]' >{p2}</p>
        </div>
      
    </div>
  )
}

export default Sec11com

