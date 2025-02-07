import React from 'react'
import NButton from './NButton'
import Social from './Social'
import Sec10com from './Sec10com'

const Sec10 = () => {
  let butt="Apply Now"
  let urls=["https://assets-global.website-files.com/63c3f1995d4c3581bbc944b5/63c68f2ecddac415070de2e8_team-01-p-500.webp",
    "https://assets-global.website-files.com/63c3f1995d4c3581bbc944b5/63c68f2e0a57ab81ad90f31f_team-02-p-500.webp",
    "https://assets-global.website-files.com/63c3f1995d4c3581bbc944b5/63c68f2ed7fe4b9a5bef7ee1_team-03-p-500.webp"
  ]
  let name=["Annette Black","Devon Lane","Chris Watson"]
  let post=["Branding","Branding","Marketing"]
 
  return (
    <div className='px-10 mt-15 flex gap-7 items-center'>
        <div className='h-[65vh] px-10 py-10 flex flex-col justify-between w-[22vw] bg-gray-50 '>
            <div className='flex flex-col gap-3' >
            <h2 className='text-[17px]'>JOIN THE TEAM</h2>
            <h1 className='text-4xl tracking-tight leading-[6vh] font-[300]'>Want to shape the future of branding?</h1>
           
           <p className='text-gray-400 text-[17px] mt-5 leading-[3vh] w-[90%] '>Join us and shape the future of branding today!</p>
           
           
            </div>

            <NButton
            data={butt}/>

        </div>
         
         <Sec10com arr={urls}
         name={name}
         post={post} />


        

        

    
    </div>
  )
}

export default Sec10
