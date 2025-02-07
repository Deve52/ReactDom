import React from 'react'
import Line from './components/line'
import SecChange from './SecChange'

const Sec4 = () => {
  let data=`Our Work`
  let hdata=`Selected Work`
  let bdata=`All Work`
  return (
   
    <SecChange
    tag={data}
    heading={hdata}
    butdata={bdata}
    />

  )
}

export default Sec4
