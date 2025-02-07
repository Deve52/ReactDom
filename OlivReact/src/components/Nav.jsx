import React from 'react'

const Nav = () => {
  return (
    <div className='h-[8vh] w-full flex justify-between items-center px-10'>
        <div className="logo flex gap-3 items-center ">
            <img className='h-[2.5vw]' src="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg" alt="" />
            <h1 className='px-4 py-2 rounded-full bg-red-200 hover:bg-red-300  inline-block text-xl'>We are hiring!</h1>
        </div>
        <div className="atags flex gap-8 text-xl items-center">
            <a  class="a" href="#">Work</a>
            <a  class="a" href="#">Services</a>
            <a class="a"  href="#">About</a>
            <a  class="a" href="#">Blog</a>
            <span className='flex'  >
                <a  class="a" href="#">Pages</a>
                <i class="text-black text-2xl ri-arrow-drop-down-line"></i>
            </span>
            <span className='flex items-center  gap-2' >
            <a class="a"  href="#">Cart</a>
            <h1 className=' px-1.5 py-.5  bg-red-200 rounded-full'>0</h1>
            </span>
            <a className='navHover px-3 py-1.5 rounded-full' href="#">Get in Touch</a>
        </div>

      
    </div>
  )
}

export default Nav
