import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'remixicon/fonts/remixicon.css'


const App = () => {
   const [ProductsArray, setProductsArray] = useState([]);
   const [CartArray, setCartArray] = useState([]);
   const [total, settotal] = useState(0);
   

   useEffect(() => {
    
    getData()
   }, []);
   useEffect(()=>{
    let sum=0;
      CartArray.forEach((elem)=>{
       
           sum+=elem.price*elem.count;

      })
      settotal(Math.floor(sum))
   },[CartArray])

  async function getData(){
    let response = await axios.get("https://fakestoreapi.com/products")
    // Object.assign(response.data,{count:1});//response.data is an array of object and youre assigning it a property stupid
    // console.log(response.data)
    response.data.map((obj)=>{
        obj.count=1;
    })
    setProductsArray(response.data);    
  }

  function addToCart(index){
    if(!(CartArray.includes(ProductsArray[index]))){
      let copyarr=[...CartArray,ProductsArray[index]]
    setCartArray(copyarr)
    console.log("cart ke array ma add ho gaya");

    
  }
  
}
function deleteCartProduct(i){
     let copyarr=[...CartArray]
     copyarr.splice(i,1);
     setCartArray(copyarr);
}

function countReduce(i){
     let copycart=[...CartArray]
    copycart[i].count>1 && copycart[i].count--;
     setCartArray(copycart)
}
function countAdd(i){
     let copycart=[...CartArray]
     copycart[i].count++;
     setCartArray(copycart)
}

  

  return (
    <div className='appReturn'>

      
      
      <div className=' All flex'>
        
      <div className='productsDiv p-2 w-[75%] flex flex-wrap gap-5 bg-amber-300'>
        {ProductsArray.map((obj,idx)=>{

          
          return <div key={idx} className='productBox w-[17vw] h-[30vh] my-5 flex flex-col items-center justify-between'>
            <img className='h-[13vh] w-[13vh] object-cover' src={obj.image} alt="" />
            <h3 className='text-[2vh]'>{obj.title}</h3>
            <button
            onClick={()=>{
              addToCart(idx)
            }}
             className='bg-green-500  text-white px-2 py-1 rounded-[10px] active:scale-95'>Add To Cart</button>

          </div>

        })}
      </div>
      <div className='cartDiv p-2 w-[25%]  bg-blue-500 flex flex-col'>
        <h1 className='mx-auto text-4xl font-medium'>Cart</h1>
        <hr className='my-5' />
        {
          CartArray.map((obj,i)=>{
            return <div key={i} className=' flex px-3 py-2 gap-3 justify-start items-center'>
              <img className='h-[10vh] w-[10vh] object-cover' src={obj.image} alt="" />
              <div className='flex flex-col gap-3'>
                <h3 className='text-sm'>{obj.title}</h3>
                <div className='flex gap-5 '>
                  <button
                  onClick={()=>{
                    deleteCartProduct(i)
                  }}
                 
                  className="bg-red-600  text-white px-2 py-1 text-sm">Delete</button>
                  <div className='flex gap-5'>
                  <i onClick={()=>{
                     countReduce(i);
                  }}  className=" text-3xl active:scale-90 text-black bg-red-600 ri-subtract-line"></i>
                  <h1 className='bg-gray-600 text-white px-2 py-1'>{obj.count}</h1>
                  <i onClick={()=>{
                    countAdd(i);
                  }} class=" text-3xl active:scale-90 text-black bg-violet-400 ri-add-line"></i>
                  </div>
                </div>
              </div>
            </div>
          })
        }
        
       { 
       CartArray.length>0 && <h1 className='text-4xl font-[400] ml-5 mt-16'>total: ${total}</h1>
       }
      </div>
      
      </div>
    </div>
  )
}

export default App
