import { Experties } from '@/Data/Data'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const OurStack = () => {
  return (
    <div className='bg-black bg-opacity-50 my-[5rem]  '  >
      <div className='text-start' >

<h3 className=' text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 '>Experties</h3>
<p className='text-2xl'>New Technologies</p>
<p className='text-lg'>By Using New Technollgies and stying updated. </p>
</div>
    <ul className='grid xl:grid-cols-3 grid-cols-2  my-8 gap-4  '>
      {Experties.map((expert, index) => (
        <div key={expert} className='w-full  flex items-center space-x-4'  >
          <div>

          <FontAwesomeIcon className='text-blue-300' icon={faGear} />
          </div>
        <li  className='text-md font-semibold   text-center w-max '>
          {expert}

        </li>
        </div>
      ))}
    </ul>
  </div>
  )
}

export default OurStack