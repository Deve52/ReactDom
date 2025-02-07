import React from 'react'
import NButton from './nButton'

const Sec12 = () => {
    //  let butdata=`Get in Touch ${<i class="ri-arrow-right-up-line"></i>}`//esse nahi ho raha aur button ka size bhi nahi badh raha variable use nahi ho pa raha ha.
    let butdata=`Get in Touch`
   
   return (
    <div className='mx-10 flex px-20 py-20 bg-[#F1F6F5] gap-[10vw] '>
        <h1 className='font-light text-[2vh] mt-3'>CONTACT</h1>
        <div className='w-[55vw] flex flex-col gap-8'>
            <h1 className='text-[10vh] tracking-tight font-[320] leading-[11.5vh]'>
            Let's start building your brand's unique story together.</h1>
            <p className='text-[1.8vw] w-[80%] tracking-normal leading-[5vh] text-gray-950 font-[350]'>Want to see what a difference a strong brand can make? Request a consultation today.</p>
       <div className='w-[40%] mt-10'> <NButton
        data={butdata}
        
        /></div>
        </div>
      
    </div>
  )
}

export default Sec12
