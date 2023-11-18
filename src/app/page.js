"use client"
import Header from '@/Components/Header'
import Hero from '@/Components/Sections/Hero'
import Portfolio from '@/Components/Sections/Portfolio'
import ServiceSection from '@/Components/Sections/ServiceSection'
import TestimonialSection from '@/Components/Sections/TestimonialSection'
import Image from 'next/image'




export default function Home() {

      
 
    


  return (
    <main className=" px-4 lg:px-10">
      <Header/>
    
      <Hero/>
      <ServiceSection/>
      <Portfolio />
      <TestimonialSection/>
    </main>
  )
}
