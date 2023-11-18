import PortfolioCard from '@/Components/PortfolioCard'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { faArrowAltCircleLeft, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useRef,useState,useEffect} from 'react'

const Portfolio = () => {
  const PortfolioContainerRef = useRef()

  const [isLeftButtonActive, setIsLeftButtonActive] = useState(true);
  const [isRightButtonActive, setIsRightButtonActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const container = PortfolioContainerRef.current;
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

      setIsLeftButtonActive(!isAtStart);
      setIsRightButtonActive(!isAtEnd);
    };

    PortfolioContainerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      PortfolioContainerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);


const scrollToLeft = () =>{
  const innerCard =- PortfolioContainerRef.current.firstChild.offsetWidth || 0
  
  PortfolioContainerRef.current.scrollBy({
    left: innerCard,
    behavior:"smooth"
  })

}
const scrollToRight = () =>{
  const innerCard = PortfolioContainerRef.current.firstChild.offsetWidth || 0
  
  PortfolioContainerRef.current.scrollBy({
    left: innerCard,
    behavior:"smooth"
  })

}


  return (
    <div className='my-10'>
        <div className='xl:w-[50%]'>

<h3 className=' text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 '>Portfolio</h3>
<p className='text-2xl'>Our Work</p>
<p className='text-lg'>I've had the pleasure of working on.
    Each project showcases my skills and passion for creating meaningful and innovative solutions </p>
    <button onClick={scrollToLeft} >Card</button>
</div>
<div ref={PortfolioContainerRef} id='service-card-container' className='flex xl:flex-wrap overflow-x-auto xl:gap-5 justify-start items-center my-5 ' >
           <PortfolioCard/>
           <PortfolioCard/>
           <PortfolioCard/>
           <PortfolioCard/>
           <PortfolioCard/>
           <PortfolioCard/>
           <PortfolioCard/>
           <PortfolioCard/>
        </div>
        <div className='flex gap-4 xl:hidden' >
          <div  >

    <FontAwesomeIcon className={isLeftButtonActive ? 'text-white cursor-pointer' : 'text-gray-400 cursor-not-allowed'}   size='2x' onClick={scrollToLeft} icon={faArrowCircleLeft} />
          </div>
          <div>

    <FontAwesomeIcon className={isRightButtonActive ? 'text-white cursor-pointer' : 'text-gray-400 cursor-not-allowed'}   size='2x' onClick={scrollToRight} icon={faArrowCircleRight} />
          </div>
</div>
    </div>
  )
}

export default Portfolio