import React from 'react'
import SecChange from './SecChange'
import Sec13com from './Sec13com'

const Sec13 = () => {
    let tdata=`BLOG`
    let hdata=`Insights on Branding`
    let bdata=`See all`

    let img=["https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6926c3e0cadb265cce971_post-01-thumb-p-500.webp","https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c692830763057ff261e841_post-02-thumb-p-500.webp","https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c69293cb2ab32755a1a6d7_post-03-thumb-p-500.webp","https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c692a30a57ab0d6c9128fe_post-04-thumb-p-500.webp"]
    let h=["The Importance of a Strong Brand Positioning","Creating a Consistent Brand Identity Across All Touchpoints","The Role of Market Research in Branding Strategy","The Impact of Social Media on Branding"]
  return (
    <div className='mx-10'>
        <SecChange
        tag={tdata}
        heading={hdata}
        butdata={bdata}
        />

        <div className='h-[55vh] w-full flex justify-between'>
            
            <Sec13com
            image={img[0]}
            h1data={h[0]}
            />
            <Sec13com
            image={img[1]}
            h1data={h[1]}
            />
            <Sec13com
            image={img[2]}
            h1data={h[2]}
            />
            <Sec13com
            image={img[3]}
            h1data={h[3]}
            />


        </div>

      
    </div>
  )
}

export default Sec13
