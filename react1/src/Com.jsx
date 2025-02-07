import React, { useState } from 'react'
import App from './App'

const Com = () => {
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);

    let change=()=>{
        setx(Math.random()*90)
        sety(Math.random()*90)
        // console.log(x,y);
        
    }

  return (
    <div className='flex h-screen w-full relative'>
        <App x={x} y={y}/>
        <button onClick={()=>{
            change()
        }} className='p-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-2  bg-red-400 active:scale-[95%] rounded-[10px] text-white'>Position</button>
    </div>
  )
}

export default Com
