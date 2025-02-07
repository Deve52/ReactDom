import React from 'react'
import Sec3com from './sec3com'

const Sec3 = () => {

   let data=[
    {
        head:"Brand Strategy",
        para:"We help businesses define their unique brand message and branding positioning.",
        a:"About Strategy"
    },
    {
        head:"Visual Identity",
        para:"We create visual elements such as logos, packaging, and marketing materials for your brand.",
        a:"About Identity"
    },
    {
        head:"Digital Marketing",
        para:"We help businesses to promote their brand online and create engaging digital experiences.",
        a:"About Marketing"
    },
    {
        head:"Brand Manage­ment",
        para:"We help businesses to implement their brand across all touchpoints and ensure consistency.",
        a:"About Management"
    }
   ]

  return (
    <div className='  px-10 flex justify-around items-center'>
        <Sec3com
        obj={data[0]}/>
        <Sec3com
        obj={data[1]}/>
        <Sec3com
        obj={data[2]}/>
        <Sec3com
        obj={data[3]}/>
    </div>
  )
}

export default Sec3
