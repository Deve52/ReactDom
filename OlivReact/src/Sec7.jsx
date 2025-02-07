import React from 'react'
import Sec7com from './Sec7com'

const Sec7 = () => {
    let head=[["Helping Brands"," Stand Out"],["How We Work"," with Our Clients"],["Collaboration is Key"],["Our Approach"],["Our Philosophy"]];
    let foot=[["Bold Moves,","Big Impact."],["Honesty is the"," Best Policy."],["Building Strong"," Partnerships."],["Achieving"," Real Results."],["Building Trust,","Not Pitching."]];
    let color=["#F1F6F5","#F8F6F8","#F1F3F6","#F8F5F8","#F2F6F8"]
  return (
    <div className='px-10 mt-20'>
        <div className="firstSet flex justify-start gap-5 items-center    ">
            <span className='h-[50vh] px-10 py-5 bg-gray-100 w-[21.45vw] flex flex-col justify-between '>
                <span>
                <p className='text-gray-500 text-xl'>Lorem,</p>
                <h1 className='text-3xl font-[300] mt-5'>Lorem ipsum dolor sit amet.</h1>
                </span>
                <button className='bg-gray-800 w-[50%] cursor-pointer incline-block text-white hover:bg-gray-950 px-1 py-2 rounded-full flex justify-center items-center'>Lorem.</button>
            </span>
            <Sec7com
            header={head[0]}
            footer={foot[0]}
            col={color[0]}/>
            <Sec7com
            header={head[1]}
            footer={foot[1]}
            col={color[1]}/>
         
           
           


        </div>
      
        <div className="SecondSet mt-5 flex justify-end gap-5 items-center    ">
            <Sec7com
            header={head[2]}
            footer={foot[2]}
            col={color[2]}/>
            <Sec7com
            header={head[3]}
            footer={foot[3]}
            col={color[3]}/>
            <Sec7com
            header={head[4]}
            footer={foot[4]}
            col={color[4]}/>
           
          

        </div>
      
    </div>
  )
}

export default Sec7
