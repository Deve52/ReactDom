import React from 'react'

const NButton = ({data}) => {
  return (
    <button 
    className='px-5 py-2  rounded-full w-1/2 cursor-pointer hover:bg-gray-800 bg-black text-white flex justify-center items-center'>
        {data}

    </button>
  )
}

export default NButton
