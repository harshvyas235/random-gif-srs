
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Spinner } from './Spinner';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


export const Randomgif = () => {

    const [gif,setgif]=useState('')
    
    const [loader,setloader]=useState('false')
    
    async function getimage(){
      try{
        setloader(true)
        const url="https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";
        const output=await axios.get(url)
        let image= output.data.data.images.downsized_large.url
        setgif(image)
        
        setloader(false)
      }
      catch{
        console.log('there is error')
        console.log(API_KEY)

      }
     
    }

    function changehandler(){
      getimage()
    }
    useEffect(()=>{
        getimage()
        console.log(gif);
        

    },[])

  return (
    <div className=' bg-green-500 w-[350px] flex flex-col items-center gap-4 rounded-xl sm:w-[600px] xl:w-[900px]'>
        <div className='uppercase underline  mt-3'>
         A Random Gif
        </div>
        <div>
        {
          loader ? (<Spinner/>) : <img src={gif}  className=' w-[250px] sm:w-[500px] xl:w-[750px]'  />
        }
            
        </div>
        <div  >
            <button className=' bg-orange-400 rounded-xl text-center  w-[250px] mb-3 sm:w-[500px] xl:w-[750px]' onClick={changehandler} >Genrate</button>
        </div>
    </div>
  )
}
