import React from 'react'

const BnavCom = (Bohut) => {
    // console.log(Bohut.obj)
    // let arr=["hsgs","ksjdhkjh","skjhj","shdjfhd","sdjkhf"]
  return (
    <div className='w-[20vw] '>
        <h1 className='text-2xl w-[70%]  font-200 text-gray-700 mb-10 border-b-2 border-solid py-2 border-gray-300'>{Bohut.obj.head}</h1>
        
        <div className='BottomAs flex flex-col gap-5 '>
            {
                Bohut.obj.links.map((elem,idx)=>{
                    return <a id={idx} className='text-lg text-gray-700 font-200 w-fit ' href="#">{elem}</a>//yaha inline block is useless since it is flexed(already inline block element) , use w-fit to make atags in there suitable length or self-start

                })
            }

        </div>

      
    </div>
  )
}

export default BnavCom

