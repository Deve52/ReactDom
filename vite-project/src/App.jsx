import React, { useState } from 'react'

const App = () => {

  
  const [song, setsong] = useState("");
  const [album, setalbum] = useState("");
  const [singer, setsinger] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [array, setarray] = useState([]);
  
  let formhandler=(a)=>{
    a.preventDefault();
    let copyarr=[...array]
    copyarr.push({song,album,singer,imageURL})
    setarray(copyarr)

    
    setalbum("")
    setsinger("")
    setsong("")
    setimageURL("")
    
  }


  return (
    <div>
      {/* <h1 className='text-2xl tracking-wider'>Song generator</h1> */}
      <form   onSubmit={(e)=>{
          formhandler(e);
        console.log("submit hogaaya");
        
      }}
      className='p-10 my-5 rounded-[10px] bg-purple-100 flex flex-col justify-center items-center' >
        <input value={song} onChange={(dets)=>{setsong(dets.target.value)}} type="text" placeholder='Song Name' />
        <input value={album} onChange={(dets)=>{setalbum(dets.target.value)}} type="text" placeholder='Album Name '/>
        <input value={singer} onChange={(dets)=>{setsinger(dets.target.value)}} type="text" placeholder='Singer Name'/>
        <input value={imageURL} onChange={(dets)=>{setimageURL(dets.target.value)}} type="text" placeholder='image URL' />
        <button className="inline-block bg-blue-500 text-white active:scale-[97%]">Submit</button>
      </form>

     {
      array.map((elem,idx)=>{
        return <div key={idx} className="card my-1 px-2 py-2 rounded-[10px] bg-pink-100 w-[40vw] flex gap-10 items-center ">
          <img className='h-[100px] w-[100px] object-cover rounded-[10px]' src={elem.imageURL} alt="" />
          <div>
          <h1 className='text-[1.5vw] font-[320]' >{elem.song}</h1>
          <h2 className='text-[1.2vw] font-[350]'>Album: {elem.album}</h2>
          <h2 className='text-[1.2vw] font-[350]'>Singer: {elem.singer}</h2>
          </div>
        </div>

      })
     }
     
    </div>
  )
}

export default App
