import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../Utils/Context';
import { toast } from 'react-toastify';

const Edit = () => {

    let navigate = useNavigate()

    let {id}= useParams()

    let [products,setProducts]=useContext(UserContext)

    const [EditProduct, setEditProduct] = useState({
        title:"",
        image:"",
        category:"",
        price:"",
        description:""
    });
    const [title, settitle] = useState("");
    const [price , setprice] = useState("");
    const [category , setcategory] = useState("");
    const [image , setimage] = useState("");
    const [description , setdescription] = useState("");
    
  

   let formHanddler = (e)=>{
        e.preventDefault();
        console.log("form submitted");
        
        

        if (EditProduct.description.trim().length<5 ||EditProduct.image.trim().length<5 || EditProduct.title.trim().length<5 || EditProduct.price.trim().length<1 || EditProduct.category.trim().length<5){
           alert("enter data sufficient data in every field")
           return;
           
        }
        else{

            let pi= products.findIndex(p=>p.id==id)
            let copyproducts=[...products]
            copyproducts[pi]={...products[pi],...EditProduct}
            console.log(pi,copyproducts,EditProduct)
            setProducts(copyproducts)

            // setProducts([...products,newProducts])
            // console.log(products);
            localStorage.setItem("products",JSON.stringify(copyproducts))  
            // localStorage.setItem("products" ,JSON.stringify([...products,newProducts]))
            toast.success("Item Editted")
            navigate(-1)//ek step piche
        }
        
       
        
   }

   useEffect(()=>{
   setEditProduct(products.filter((p)=>{return p.id == id})[0])
    
   },[id])
  
   let changeHandler=(e)=>{

    // console.log(e.target.name,e.target.value);
    setEditProduct({...EditProduct , [e.target.name] : e.target.value})
    

   }
   
   


  return (
    <div className='h-screen w-full overflow-y-hidden'>
    <div className='h-full mx-auto w-1/2 mt-16 '>
    <h1 className='my-5 pl-2 text-4xl font-light'>Edit Product</h1>
       <form onSubmit={(e)=>{formHanddler(e)}} >
       <input 
       value={EditProduct && EditProduct.image}
       name="image"
       onChange={(e)=>{changeHandler(e)}}
       className='h-[5vh] mb-3 rounded text-xl w-full p-3 bg-zinc-100' type="url" placeholder="image link" />
       <input
       name="title" 
       value={EditProduct && EditProduct.title}
       onChange={(e)=>{changeHandler(e)}}
       className='h-[5vh] mb-3 rounded text-xl w-full p-3 bg-zinc-100' type="text" placeholder="title" />
       <div className='w-full mb-3 mx-auto flex justify-between'>

       <input
       name="price" 
       value={EditProduct && EditProduct.price}
       onChange={(e)=>{changeHandler(e)}}
       className='h-[5vh] rounded text-xl w-[49%] p-3 bg-zinc-100' type="number" placeholder='Price' />
       <input
       name="category" 
       value={EditProduct && EditProduct.category}
       onChange={(e)=>{changeHandler(e)}}
       className='h-[5vh] rounded text-xl w-[49%] p-3 bg-zinc-100' type="text" placeholder='Category' />
       </div>
       <textarea 
       name="description"
       value={EditProduct && EditProduct.description}
       onChange={(e)=>{changeHandler(e)}}
       rows={10} type="text" placeholder='Enter product discription'  className='mb-3 rounded text-xl w-full p-3 bg-zinc-100'></textarea>
       <button  className='text-2xl px-3 py-1 border-solid rounded border-blue-400 border-1 text-blue-400'>Edit Product</button>
       </form>
    </div>
    
  
</div>
  )
}

export default Edit
