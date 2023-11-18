import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'


const Header = () => {
    const [isHamburger, setIsHamburger] = useState(false)
  return (
 <div className='flex justify-between items-center relative h-[4rem]' >
    <div className='lg:flex-1'>Tayyab Iqbal</div>
    <div id='nav-links-container' className='lg:flex gap-4 items-center flex-grow lg:justify-between hidden' >
    <ul id='nav-links' className='flex lg:w-[50%] lg:justify-between   ' >
            <Link href={"/"}>
            <li className='hover'>Why Us</li>
            </Link>
            <Link href={"/"}>
            <li  className='hover' >Projects</li>
            </Link>
            <Link href={"/"}>
            <li  className='hover'>Testimonials</li>
            </Link>
            <Link href={"/"}>
            <li  >FAQ</li>
            </Link>
            
            </ul>
            <div>
                <button className='bg-gradient-to-r from-blue-600 to-purple-700 py-2 px-4 rounded-lg' >Lets Talk</button>
            </div>
    </div>
    <div className='xl:hidden'>
        {
            !isHamburger?  <FontAwesomeIcon icon={faBars} className='text-2xl' onClick={()=> setIsHamburger(true)} />  : <FontAwesomeIcon icon={faCircleXmark}  className='text-2xl' onClick={()=> setIsHamburger(false)} />
        
        }
    </div>
    <div className={` ${isHamburger? " translate-x-0 " : "  -translate-x-[70rem]  "} transition-all duration-750 absolute top-[5rem] w-full text-blue-400 text-center space-y-10 py-5 bg-black bg-opacity-100 h-[20rem] px-5 xl:hidden`} >
    <ul id='nav-links' className='flex flex-col gap-5   ' >
            <Link href={"/"}>
            <li className='border-b  py-2'>Why Us</li>
            </Link>
            <Link href={"/"}>
            <li  className='border-b  py-2' >Projects</li>
            </Link>
            <Link href={"/"}>
            <li  className='border-b  py-2'>Testimonials</li>
            </Link>
            <Link href={"/"}>
            <li  >FAQ</li>
            </Link>
            
            </ul> 
    </div>
 </div>
  )
}

export default Header