import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { UserContext } from '../Utils/Context'
import Loading from './Loading'


const Home = () => {
    let [products] = useContext(UserContext)

  return ( 
   <>
    <Nav/>

<div className='w-[80vw] h-screen px-3 py-5 flex flex-wrap overflow-y-auto overflow-x-hidden '>
  
  {
    products ? products.map((p,i)=>{

        return <Link key={i} to={`/details/${p.id}`} className=' card ml-3 mt-2 px-3 py-2 w-[18%] h-[35vh]  shadow flex flex-col justify-between items-center text-center overflow-hidden '>
        <div style={{backgroundImage:`url(${p.image})`}} className='imageDiv w-full h-[70%] hover:scale-110 bg-contain bg-no-repeat bg-center'></div>
        <h1 className='text-sm'>{p.title}</h1>
      </Link>

    }) : <Loading/>
  }

</div>
   </>

  )
}

export default Home
