import React from 'react'
import Sec5com from './Sec5com'

const Sec5 = () => {
    let data=[ {url:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b981e34f347cacdc73b6_project-01-thumb.webp",
        name:"Invision Studio",
        job:"Marketing"
    }, 
    {url:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b96d86c0c985079d8d60_project-02-thumb.webp",
         name:"Square Media",
        job:"Branding"

    } ,
     {url:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b953a2c1a5706f63bbe1_project-03-thumb.webp",
         name:"Vision Design",
        job:"SocialMedia"

     } ,
    {url:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b943f334e17d7007a0ea_project-04-thumb.webp",
         name:"Design Bros",
        job:"Branding"

    } ]
    
  return (
    <div className='px-10'>

        <div className=' w-full  flex justify-between items-center gap-5 mb-7'>
            
            <Sec5com
            obj={data[0]}/>
            <Sec5com
            obj={data[1]}/>
            
            
        </div>
        <div className=' w-full   mt-5 flex justify-between items-center gap-5'>
            <Sec5com
            obj={data[2]}/>
            <Sec5com
            obj={data[3]}/>
           
            
            
        </div>
        
      
    </div>
  )
}

export default Sec5
