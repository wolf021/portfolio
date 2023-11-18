import TestimonialCard from '@/Components/TestimoinailCard'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useRef,useEffect,useState} from 'react'

const TestimonialSection = () => {
    const myContainerRef = useRef()

    const [isLeftButtonActive, setIsLeftButtonActive] = useState(true);
  const [isRightButtonActive, setIsRightButtonActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const container = myContainerRef.current;
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

      setIsLeftButtonActive(!isAtStart);
      setIsRightButtonActive(!isAtEnd);
    };

    myContainerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      myContainerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);


    const scrollToLeft = () => {
        const cardWidth =- myContainerRef.current.firstChild.offsetWidth || 0;
    
        // Use scrollBy to scroll the container by the width of a single card
        myContainerRef.current.scrollBy({
          left: cardWidth,
          behavior: 'smooth', // You can remove this if you don't want smooth scrolling
        });
   
        
      };
    const scrollToRight = () => {
        const cardWidth = myContainerRef.current.firstChild.offsetWidth || 0;
    
        // Use scrollBy to scroll the container by the width of a single card
        myContainerRef.current.scrollBy({
          left: cardWidth,
          behavior: 'smooth', // You can remove this if you don't want smooth scrolling
        });
       
      };
    
  return (
    <div className='my-10'>
         <div className='xl:w-[50%]  '>

<h3 className=' text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 '>Testimonials</h3>
<p className='text-2xl'>Our Client Says</p>
<p className='text-lg'>Dont Take Our word for it. Hear it from our happy clients.</p>

</div>
<div ref={myContainerRef} className='my-5 flex overflow-x-scroll no-scrollbar ' >
    <TestimonialCard/>
    <TestimonialCard/>
    <TestimonialCard/>
    <TestimonialCard/>
    <TestimonialCard/>
</div>
<div className='flex gap-4' >
    <div>

    <FontAwesomeIcon   className={isLeftButtonActive ? 'text-white cursor-pointer' : 'text-gray-400 cursor-not-allowed'} size='2x'  onClick={scrollToLeft} icon={faArrowAltCircleLeft} />
    </div>
    <div>

    <FontAwesomeIcon  className={isRightButtonActive ? 'text-white cursor-pointer' : 'text-gray-400 cursor-not-allowed'} size='2x' onClick={scrollToRight} icon={faArrowAltCircleRight} />
    </div>
</div>
    </div>
  )
}

export default TestimonialSection