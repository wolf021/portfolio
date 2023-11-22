import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ServiceCard = ({title,description}) => {
  return (
    <div className='xl:min-w-[5rem] h-[24rem] min-w-full group border border-gray-700 hover:shadow-lg w-[18rem] shadow-2xl hover:border-white hover:bg-black hover:bg-opacity-50 rounded-xl py-8 px-3 flex flex-col space-y-5 hover:scale-105 transition-all duration-700 ' >
        <div className='bg-gradient-to-r from-blue-600 to-purple-700 py-2 px-4 rounded-lg w-[60px] h-[60px]' >
        <FontAwesomeIcon className='w-full h-full' icon={faTrophy} />
        </div>
        <div className='space-y-2' >
            <p className='  text-blue-600 font-bold "' >{title}</p>
            <p className='text-gray-500 group-hover:text-white transition-all duration-700 ' >{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard