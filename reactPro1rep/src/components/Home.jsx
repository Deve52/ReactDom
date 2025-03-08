import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../Utils/Context'
import Loading from './Loading'
import AxiosInstance from '../Utils/Axios'



const Home = () => {
    let [products,setProducts] = useContext(UserContext)

    let {search} = useLocation()//uses to gather info about searched url
    

     let decodedSearch= decodeURIComponent(  search.split("=")[1] );//used to decode the url code
    //  console.log(decodedSearch);

     let [categorizedProducts, setcategorizedProducts] = useState(null); 
     
     

    let getCategoryData= async ()=>{
    //ye function category ka data layga aur show kr dega.
        try {
          let {data} = await AxiosInstance(`/products/category/${decodedSearch}`)
          // console.log(data);
          setcategorizedProducts(data)
          
          
        } catch (error) {
          console.log(error)
          //agar try nahi chala tho error batayga
          
        }
        
        
     }


//  (decodedSearch && decodedSearch !== "undefined" && !(decodedSearch === undefined)) && ( getCategoryData())
 
  useEffect(()=>{
    // if (decodedSearch != "undefined") getCategoryData(); //agar koi category select ke tho function chalaaoo
    if (decodedSearch != "undefined"){ setcategorizedProducts(products.filter(p=>p.category==decodedSearch)) }
    if(!categorizedProducts || decodedSearch == "undefined") setcategorizedProducts(products);//agar category select nahi kee tho sab products dikhaoo
    
  },[decodedSearch,products])



     
     
    
    
 
  return ( 
   <>
    <Nav/>

<div className='w-[80vw] h-screen pt-10 px-3 py-5 flex flex-wrap overflow-y-auto overflow-x-hidden '>
  
  {
    categorizedProducts ? categorizedProducts.map((p,i)=>{

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
