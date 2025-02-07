import React from 'react'
import Sec11com from './Sec11com'
import Line from './components/line'

const Sec11 = () => {
    let onei="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418ce6a0062cf2d279e35_client-logo-02.svg"
    let oneh1=`“We couldn't be happier with the branding strategy developed.”`
    let onep1=`We approached Øliv for a complete rebranding of our company and we couldn't be happier with the results. Their market research and analysis helped us define our target audience and unique brand positioning. Their team then created a visually compelling logo and consistent branding across all touchpoints.
    `
    let onep2=`The new brand has helped us stand out in the market and increase sales. We highly recommend Øliv to any business looking to rebrand or refresh their brand.`
    let twoi="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418cea9dabef95143b0c1_client-logo-06.svg"
    let twoh1=`“Expert Brand Management from Øliv”`
    let twop1=`As a growing business, it was important for us to have a strong and consistent brand. Øliv's brand management services helped us to achieve this. They conducted a thorough brand audit and provided valuable insights and recommendations.`
    let twop2=`Their ongoing monitoring and implementation of our brand has helped us maintain consistency and stay aligned with our business goals. We couldn't be happier with the results and highly recommend Øliv's brand management services.`
  return (
    <div className='mt-[25vh] '>
       
        <Sec11com
        imgsrc={onei}
        h1data={oneh1}
        p1={onep1}
        p2={onep2}
        
        />
        <Line/>
        <Sec11com
        imgsrc={twoi}
        h1data={twoh1}
        p1={twop1}
        p2={twop2}
        
        />
       
      
    </div>
  )
}

export default Sec11
