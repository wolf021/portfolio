import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Project1 from "@/Assets/Projects/emerson1.png" 
import Image from 'next/image'


const PortfolioCard = () => {
  return (
    <div className='h-[20rem] xl:min-w-[20rem] w-[20rem] min-w-full  group relative overflow-hidden hover:shadow-xl transition-all duration-700 rounded-xl  '>
        <div className='w-full h-[100%] bg-black' >
            <Image className='w-full h-[100%]' src={Project1} alt="" />
        </div>
        <div className='absolute group-hover:bottom-0 bottom-[-85%] p-3 bg-black group-hover:bg-opacity-95 bg-opacity-70 w-full transition-all duration-700 flex flex-col space-y-2 box-border h-full ' >
            <div className='text-center group-hover:hidden ' >

            <FontAwesomeIcon className='text-2xl' icon={faArrowAltCircleUp} />
            </div>
            
            <h3 className=' text-xl flex items-center gap-3'>FrontEnd:<span className='text-blue-400 border  px-2  rounded-full text-center text-sm'>Next js</span> </h3>
            <h3 className=' text-xl flex items-center gap-3'>Backend:<span className='text-blue-400  px-2 border  rounded-full text-center text-sm'>Node</span> <span className='text-blue-400 border  px-2  rounded-full text-center text-sm'>Mongo Db</span>  </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi assumenda optio suscipit maxime laudantium natus quae, omnis a enim, beatae et itaque amet. Eligendi ab, natus fugiat ad ipsam esse.</p>
           <div>

           <button className='bg-gradient-to-r from-blue-600 to-purple-700 py-2 px-4 rounded-lg' > www.emerson.us</button>
               
            
           </div>
        </div>
    </div>
  )
}

export default PortfolioCard