import ServiceCard from '@/Components/ServoceCard'
import { services } from '@/Data/Data'
import React from 'react'

const ServiceSection  = () => {
  return (
    <div>
        <div className='text-start' id='why-us' >

        <h3 className=' text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 '>Service</h3>
        <p className='text-2xl'>Exceeding Expectations</p>
        <p className='text-lg'>We are not just another agency, we are your path to execptional web projects. </p>
        </div>
        <div id='service-card-container' className='flex xl:flex-wrap  flex-col xl:flex-row   gap-10 xl:justify-start items-center my-5 ' >
          {
            services.map(service=>(

              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))
          }
            
        </div>
         </div>
  )
}

export default ServiceSection 