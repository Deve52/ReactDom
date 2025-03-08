import React, { useContext } from 'react'
import { UserContext } from '../Utils/Context'
import { Link } from 'react-router-dom'
import Loading from './Loading'

//?category=${c} - this ? is used to seprate the path and query parameteres, it tell the browser that it is not the path but querry.

const Nav = () => {

    let color= ()=>{
        
        return `rgba(${((Math.random())*255).toFixed()},${((Math.random())*255).toFixed()},${((Math.random())*255).toFixed()},0.4)`
        
    }
    // console.log(color());

    let [products]= useContext(UserContext)

    let categories = (products && products.map((p)=>{
        return p.category;

    }))
    categories = categories && categories.reduce((acc,c)=>{
          if(!(acc.includes(c))){
            acc.push(c);
          }
          return acc;
    },[])
    // console.log(categories);

    // categories = [...new Set(categories)];
    // console.log(categories);
    
    

  return (
    <nav className='h-screen w-[20vw] bg-gray-50 pt-5 flex flex-col items-center justify-start gap-3'>
      <Link to={"/addnewproduct"} className='text-2xl px-3 py-1 border-solid border-blue-200 border-1 text-blue-200'>Add Product</Link>
      <hr className='w-[80%] text-gray-300'/>
      <div  className='w-[80%]'>
      <h1 className='text-3xl font-light mb-3'>Category </h1>
         {categories ? categories.map((c,i)=>{
     
            return <Link key={i} to={`/?category=${c}`}>  <div key={i}  className='flex gap-2 items-center mt-2 text-gray-700'><span style={{backgroundColor: color()}} className='h-[15px]  w-[15px] inline-block rounded-full'></span>{c}</div>
           
         </Link> }): <div></div>}
      
     
     
      </div>


    </nav>
  )
}

export default Nav
