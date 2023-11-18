import React from 'react'
import Hero1 from "@/Assets/hero1.jpg"
import Hero2 from "@/Assets/character.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    const scrolDown = () =>{
        const scrollHeight =  window.innerHeight * 1.0
        window.scrollTo({top: scrollHeight,behavior:"smooth"})
        console.log("scrolled")
    }
  return (
    <>
    
    <div className='my-5 box-border flex  xl:items-start   xl:justify-between py-[2rem]  xl:py-[3rem] ' >
        <div className='xl:w-[50%]  '>
        <h1 className=' text-6xl ' >We Develop <span className='  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 "' >amazing</span>  websites for your <span className='  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 "' >business</span>. </h1>
        <p className='my-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste dolores ullam, rerum consectetur minus in nam veritatis nostrum libero similique, distinctio vel expedita mollitia perspiciatis esse ipsum deleniti rem?</p>
        <div>
                <button className='bg-gradient-to-r from-blue-600 to-purple-700 py-2 px-4 rounded-lg' >Get Started</button>
            </div>
        </div>
        <div id='hero-img-bg'  className='bg-gradient-to-r from-blue-600 to-purple-700 xl:h-[400px] xl:w-[500px] xl:block overflow-hidden hidden ' >
        <Image src={Hero1} className='h-[400px] w-full ' alt="" />
        </div>
        
    </div>
    <div id='our-stack' className='  overflow-x-auto '>
        <div className='flex justify-between  space-x-10  w-full pb-3 ' >

        <div className='border-white border-2 p-4 rounded-md  text-center group hover:bg-white transition-all duration-700 ' >
            <h3 className=' text-white group-hover:text-transparent text-xl group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 '>React</h3>
        </div>
        <div className='border-white border-2 p-4 rounded-md   group hover:bg-white transition-all duration-700 ' >
            <h3 className=' text-white group-hover:text-transparent text-xl group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 '>Next</h3>
        </div>
        <div className='border-white border-2 p-4 rounded-md   group hover:bg-white transition-all duration-700 ' >
            <h3 className=' text-white group-hover:text-transparent text-xl group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 '>Javascript</h3>
        </div>
        <div className='border-white border-2 p-4 rounded-md   group hover:bg-white transition-all duration-700 ' >
            <h3 className=' text-white group-hover:text-transparent text-xl group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 '>Typescript</h3>
        </div>
        <div className='border-white border-2 p-4 rounded-md   group hover:bg-white transition-all duration-700 ' >
            <h3 className=' text-white group-hover:text-transparent text-xl group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 '>Node</h3>
        </div>
        <div className='border-white border-2 p-4 rounded-md   group hover:bg-white transition-all duration-700 ' >
            <h3 className=' text-white group-hover:text-transparent text-xl group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 '>Express</h3>
        </div>
        <div className='border-white border-2 p-4 rounded-md   group hover:bg-white transition-all duration-700 ' >
            <h3 className=' text-white group-hover:text-transparent text-xl group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 '>Mui</h3>
        </div>
       
        <div className='border-white border-2 p-4 rounded-md   group hover:bg-white transition-all duration-700 ' >
            <h3 className=' text-white group-hover:text-transparent text-xl group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-700 '>Tailwind</h3>
        </div>
        </div>
       

    </div>
    <div className='text-center flex justify-center animate-bounce my-10 ' >
        <div id="scroll-btn " className=' border-2 w-max rounded-full p-4   ' onClick={scrolDown} >

    <FontAwesomeIcon className='text-xl ' icon={faArrowDown} />
        </div>
    </div>
    </>
  )
}

export default Hero