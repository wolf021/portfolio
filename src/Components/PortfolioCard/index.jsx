import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Project1 from "@/Assets/Projects/emerson1.png" 
import Image from 'next/image'
import Link from 'next/link'


const PortfolioCard = ({tech,description,link,title,Img}) => {
  return (
    <div  className='h-[20rem] xl:min-w-[20rem] w-[20rem] min-w-full  group relative overflow-hidden hover:shadow-xl transition-all duration-700 rounded-xl  '>
        <div className='w-full h-[100%] bg-black' >
            <Image className='w-full h-[100%]' src={Img} alt="" />
        </div>
        <div className='absolute group-hover:bottom-0 bottom-[-85%] p-3 bg-black group-hover:bg-opacity-95 bg-opacity-70 w-full transition-all duration-700 flex flex-col space-y-2 box-border h-full ' >
            <div className='text-center group-hover:hidden ' >

            <FontAwesomeIcon className='text-2xl' icon={faArrowAltCircleUp} />
            </div>
            <div className='' >

            <h3 className=' text-xl text-blue-600 '>{title}
             </h3>
            <h3 className=' text-xl '>Technologies:
             </h3>
             <div className='flex flex-row flex-wrap space-x-4 my-3' >
             { tech?.map((tek)=>(

                 <p className='text-blue-400 border  px-2  rounded-full text-center text-sm'>{tek}</p>
                 ))
                 
                }
                </div>
            </div>
            
            <p>{description}</p>
           <div>
                <Link href={link} >

           <button className='bg-gradient-to-r from-blue-600 to-purple-700 py-2 px-4 rounded-lg' > {link}</button>
                </Link>
               
            
           </div>
        </div>
    </div>
  )
}

export default PortfolioCard