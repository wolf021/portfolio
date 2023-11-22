
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React,{useState,useRef} from 'react'
import Avatar1 from '@/Assets/Avatars/joseph-gonzalez.jpg'

const TestimonialCard = ({text,author,avatar}) => {


  return (
    <div className='bg-black bg-opacity-50  w-[100%] min-w-full h-max p-10 flex flex-col items-center space-y-10 justify-center rounded-xl border border-white ' >
        <p className='text-center' > <span> <FontAwesomeIcon size='2x' className='text-2xl text-blue-400 ' icon={faQuoteLeft} /> </span> {text}  <span> <FontAwesomeIcon size='2x' className='text-2xl text-blue-400 ' icon={faQuoteRight} /> </span> </p>
       
        
       
        <div  className='flex flex-col justify-center items-center space-y-2 ' >
            <div className='bg-blue-400 rounded-full w-[70px] h-[70px] overflow-hidden ' >
                <Image src={avatar} className='w-full '  alt='' />
            </div>
            <p>{author}</p>
        </div>
    </div>
  )
}

export default TestimonialCard