import React from 'react'
import Line from './components/line'

const SecChange = ({tag,heading,butdata}) => {
  return (
    
      
      <div className='px-10 mt-20 mb-10'>
       <h1 className='font-[350] text-[17px]' >{tag}</h1>
       <Line/>
       <div className='flex justify-between items-center mt-5'>
        <h1 className='text-[3vw] font-[350]'>{heading}</h1>
        <button className='Sec4butt px-5 py-2 rounded-full bg-white text-black '>{butdata}</button>
       </div>
        

      
    </div>
   
  )
}

export default SecChange
