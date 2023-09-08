import { Randomgif } from "./components/Randomgif";
import { Tag } from "./components/Tag";


export default function App() {

  return <div className="background  w-full  h-screen overflow-x-hidden relative   flex flex-col items-center  gap-14">

     <div className=" border-2 bg-white w-[350px] uppercase rounded-xl mt-3 text-center  sm:w-[600px] xl:w-[1000px] ">
      Random gif
     </div>

     <div>
     <Tag/>
      
     </div>

     <div>
     <Randomgif/>
     </div>
       
       
     
   
  </div>;
}
 