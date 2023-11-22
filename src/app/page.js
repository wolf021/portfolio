"use client"
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import FaqSection from '@/Components/Sections/Faq/FaqSection'
import Hero from '@/Components/Sections/Hero'
import OurStack from '@/Components/Sections/OurStacks/OurStack'
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
      <OurStack/>
      <FaqSection/>
      <Footer/>
    </main>
  )
}
