import React, { useState } from 'react'

const App = () => {
let [username, setusername] = useState("");
let [names, setnames] = useState([]);

let Naam = [...names]
let formHandler=(t)=>{

   t.preventDefault() 
   Naam.push(username)
   console.log(Naam)
   setnames(Naam)
   setusername("")
//   let naambata=[...names,username]
//   console.log(naambata);
  

   
}
  return (
    <div className='App'>
        <form className="" onSubmit={(e)=>{
            formHandler(e)
           
        }}>
            <input
             value={username}
            
             onChange={(elem)=>{
                setusername(elem.target.value)
                console.log(elem.target.value)// yaha pr agar ma username log karu tho ek blank aa rhaaha ha 1st letter
                
            }} 
             className='text-2xl' type="text" placeholder='Enter Name' />
            <button  className='active:scale-[95%] text-2xl bg-blue-600 text-white rounded-[10px]'>Submit</button>
        </form>
        <div className='pt-10'>
            <h1>Names of Applicants</h1>   

        {
            Naam.map((elem,idx)=>{
                return <h2 key={idx}>{idx+1}. {elem}</h2>
            })
        }
        </div>
      
    </div>
  )
}
export default App
