import React, { createContext, useEffect, useState } from 'react'
import axios from './Axios';

export const UserContext= createContext();

const Context = ({children}) => {

    const [products, setproducts] = useState(null);

    let getData=async ()=>{
        try {
            const {data} = await axios("/products") 
        setproducts(data)
        
        
            
        } catch (error) {
            console.log("error");
            
            
        }
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
        <UserContext.Provider value={[products, setproducts]}>
        {children}
        </UserContext.Provider>
      
    </div>
  )
}

export default Context
