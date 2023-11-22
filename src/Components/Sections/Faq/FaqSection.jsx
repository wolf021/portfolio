
import React, { useState } from 'react'
import {faqData} from "@/Data/Data"
import Accordion from '@/Components/Accordian';

const FaqSection = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <div id='faq' >
         <div className='text-start' >

<h3 className=' text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 '>Faq</h3>
<p className='text-2xl'>Frequently Asked</p>
<p className='text-lg'>We have got all your answers. </p>
</div>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          question={faq.question}
          answer={faq.answer}
          index={index}
          openAccordion={openAccordion}
          setOpenAccordion={setOpenAccordion}
        />
      ))}
    </div>

  )
}

export default FaqSection