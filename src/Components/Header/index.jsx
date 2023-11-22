import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
 
const Header = () => {
    const [isHamburger, setIsHamburger] = useState(false)
  return (
 <div className='flex justify-between items-center relative h-[4rem]' >
    <div className='lg:flex-1 flex items-center space-x-4 '>Tayyab Iqbal </div>
    <div id='nav-links-container' className='lg:flex xl:flex gap-4 items-center flex-grow lg:justify-between 2xl:flex xl:justify-between 2xl:justify-between max-[912px]:hidden' >
    <ul id='nav-links' className='flex lg:w-[50%] lg:justify-between   ' >
            <Link href={"#why-us"}>
            <li className='hover'>Why Us</li>
            </Link>
            <Link href={"#portfolio"}>
            <li  className='hover' >Projects</li>
            </Link>
            <Link href={"#testimonial"}>
            <li  className='hover'>Testimonials</li>
            </Link>
            <Link href={"#faq"}>
            <li  >FAQ</li>
            </Link>
            
            </ul>
            <div>
            <Link href={"https://wa.me/+923214308481"} >
                <button className='bg-gradient-to-r from-blue-600 to-purple-700 py-2 px-4 rounded-lg' >Lets Talk</button>
                </Link>
            </div>
    </div>
    <div className='xl:hidden lg:hidden '>
        {
            !isHamburger?  <FontAwesomeIcon icon={faBars} className='text-3xl' onClick={()=> setIsHamburger(true)} />  : <FontAwesomeIcon icon={faCircleXmark}  className='text-2xl' onClick={()=> setIsHamburger(false)} />
        
        }
    </div>
    <div className={` ${isHamburger? " translate-x-0 " : "  -translate-x-[70rem]  "} transition-all duration-750 absolute top-[5rem] w-full text-blue-400 text-center space-y-10 py-5 bg-black bg-opacity-100 h-[20rem] px-5 xl:hidden`} >
    <ul id='nav-links' className='flex flex-col gap-5   ' >
            <Link href={"#why-us"}>
            <li className='border-b  py-2'>Why Us</li>
            </Link>
            <Link href={"#portfolio"}>
            <li  className='border-b  py-2' >Projects</li>
            </Link>
            <Link href={"#testimonials"}>
            <li  className='border-b  py-2'>Testimonials</li>
            </Link>
            <Link href={"#faq"}>
            <li  >FAQ</li>
            </Link>
            
            </ul> 
    </div>
 </div>
  )
}

export default Header