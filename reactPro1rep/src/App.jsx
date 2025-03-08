import React, { useContext } from 'react'
import Home from './components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './components/Details'
import { UserContext } from './Utils/Context'
import Addnewproducts from './components/Addnewproducts'
import Edit from './components/Edit'


const App = () => {
  let [products,setProducts]=useContext(UserContext);

  let {search,pathname}=useLocation()
  // console.log(search)//ye querry show krta haan with ?
  // console.log(pathname)// ye url ka path show krta haan without querry
  return (
   

    
    

    

    <div className='flex'>

    {

    (pathname != "/" || search.length>0) &&     
      <Link to={"/"} className=' absolute top-[1vh] left-[21.6vw] text-2xl px-2 py-.5 border-solid border-green-500 border-1 text-green-500' >Home</Link>
 }


      

       <Routes>
        <Route path={"/"} element={<Home/>} ></Route>
        <Route path={"/details/:id" } element={<Details/>}/>
        <Route path={"/addnewproduct"} element={<Addnewproducts/>}></Route>
        <Route path={"/edit/:id"} element={<Edit/>}></Route>

       </Routes>

    </div>
  )
}

export default App
