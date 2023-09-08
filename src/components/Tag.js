import axios from 'axios'
import React, { useState } from 'react'
import { Spinner } from './Spinner'

export const Tag = () => {
    const [gif,setgif]=useState('')
    const [loader,setloader]=useState('false')


    const [tag,settag]= useState('car')
    function changehandler(event){
        settag(event.target.value)
    }
    



async function getimage(){
    try{
      setloader(true)
      const url=`https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S&tag=${tag}`;
      const output=await axios.get(url)
      let image= output.data.data.images.downsized_large.url
      setgif(image)
      
      setloader(false)
    }
    catch{
      console.log('there is error')
    //   console.log(API_KEY)

    }
   
  }

   useState(()=>{
    getimage()
   },[])
   function genratehandler(){
        getimage()
   }


  return (
    <div className=' bg-cyan-700 w-[350px] flex flex-col items-center gap-4 rounded-xl justify-center sm:w-[600px] xl:w-[900px]'>
    <div className='uppercase underline  mt-3'>
     A Random {tag} Gif
    </div>
    <div>
    {
      loader ? (<Spinner/>) : <img src={gif}  className='w-[250px] sm:w-[500px] xl:w-[750px]' />
    }
        
    </div>
    <div className='flex flex-col justify-center'>
 
       <input type='text' className=' bg-white rounded-xl text-center  w-[250px] sm:w-[500px] xl:w-[750px]' onChange={changehandler} placeholder='search here'/>
        <button className=' bg-orange-400 rounded-xl text-center  w-[250px] mb-3 sm:w-[500px] xl:w-[750px]' onClick={genratehandler} >Genrate</button>
    </div>
</div>
)
  
}
