import React from 'react'

const Sec3com = (props) => {
    console.log(props.obj.head)
  return (
    <div className='px-[3vw]  mt-[10vh] pt-[5vh] h-[40vh] w-[22%] bg-gray-100 flex flex-col  gap-5'>
    <h1 className=' font-[350] text-2xl'>{props.obj.head}</h1>
    <p className=' text-[15px] tracking-[-.5px] leading-[27px] text-gray-500 opacity-1/2'> {props.obj.para}</p>
    
    <a className='text-[12px] sec3a w-fit font-[350] ' href="#">{props.obj.a}</a>
</div>
  )
}

export default Sec3com
