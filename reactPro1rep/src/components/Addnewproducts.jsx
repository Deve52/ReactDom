import React, { useContext, useState } from 'react'
import { UserContext } from '../Utils/Context';
import {nanoid} from "nanoid"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Addnewproducts = () => {
    let navigate = useNavigate()

    let [products,setProducts]=useContext(UserContext)

    const [title, settitle] = useState("");
    const [price , setprice] = useState("");
    const [category , setcategory] = useState("");
    const [image , setimage] = useState("");
    const [description , setdescription] = useState("");
    
   let formHanddler = (e)=>{
        e.preventDefault();
        console.log("form submitted");
        
        let newProducts={
            id:nanoid(),//nanoid is a function we get from nanoid , we have to install it `npm i nanoid` then import it in component , it generate a random unique id.
            image,
            title,
            price,
            category,
            description
        }
        if (description.trim().length<5 ||image.trim().length<5 || title.trim().length<5 || price.trim().length<1 || category.trim().length<5){
           alert("enter data sufficient data in every field")
           return;
           
        }else{

            setProducts([...products,newProducts])
            console.log(products);
            // localStorage.setItem("products",JSON.stringify(products))  //ye async haan tho ye setproducts ke pehle chl jata haan aur recent updated product add nahi hota so use async await or other tech like....
            localStorage.setItem("products" ,JSON.stringify([...products,newProducts]))
            toast.success("Item Added")
            navigate("/")//redirect kr dena iss path pe jab ye line chala tho
        }
        
        settitle("")
        setcategory("")
        setprice("")
        setimage("")
        setdescription("")
        
   }

  return (
    <div className='h-screen w-full overflow-y-hidden'>
        <div className='h-full mx-auto w-1/2 mt-16 '>
        <h1 className='my-5 pl-2 text-4xl font-light'>New product Details</h1>
           <form onSubmit={(e)=>{formHanddler(e)}} >
           <input 
           value={image}
           onChange={(e)=>{
              setimage(e.target.value)
           }}
           className='h-[5vh] mb-3 rounded text-xl w-full p-3 bg-zinc-100' type="url" placeholder="image link" />
           <input 
           value={title}
           onChange={(e)=>{
              settitle(e.target.value)
           }}
           className='h-[5vh] mb-3 rounded text-xl w-full p-3 bg-zinc-100' type="text" placeholder="title" />
           <div className='w-full mb-3 mx-auto flex justify-between'>

           <input 
           value={price}
           onChange={(e)=>{
              setprice(e.target.value)
           }}
           className='h-[5vh] rounded text-xl w-[49%] p-3 bg-zinc-100' type="number" placeholder='Price' />
           <input 
           value={category}
           onChange={(e)=>{
              setcategory(e.target.value)
           }}
           className='h-[5vh] rounded text-xl w-[49%] p-3 bg-zinc-100' type="text" placeholder='Category' />
           </div>
           <textarea 
           value={description}
           onChange={(e)=>{
              setdescription(e.target.value)
           }}
           rows={10} type="text" placeholder='Enter product discription'  className='mb-3 rounded text-xl w-full p-3 bg-zinc-100'></textarea>
           <button  className='text-2xl px-3 py-1 border-solid rounded border-blue-400 border-1 text-blue-400'>Add Product</button>
           </form>
        </div>
        
      
    </div>
  )
}

export default Addnewproducts
