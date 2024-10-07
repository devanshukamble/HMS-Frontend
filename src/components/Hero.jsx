import React from 'react'
import {Link} from 'react-router-dom'
export default function Hero() {
  return (
    <div className='bg-[url("/src/images/hero-bg.png")] lg:h-[95vh] h-[65vh] bg-cover bg-center flex'>
      <div className='lg:ml-[5rem] ml-5 lg:p-2 md:h-[60%] h-[80%] mt-[5%] flex flex-col justify-evenly'>
        <span className='lg:text-6xl md:text-5xl text-4xl font-bold text-white'>We Provide Best <br /> Healthcare</span>
        <p className='text-md lg:w-[50%] md:w-[50%] w-[65%] text-white'>Where Expertise Meets Empathy—Transforming Health with Personalized Care. Your Journey to Wellness Begins Here.</p>
        <Link to="/about" className='border-2 border-[#37AE96] bg-white text-[#37AE96] hover:bg-[#37AE96] hover:text-white hover:border-[#fff] transition-all ease-in-out duration-150 hover:border-2 p-2 rounded-xl w-fit text-bold'>Read More</Link>
      </div>
    </div>
  )
}
