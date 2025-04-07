import React from 'react'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-brown-500'>
          {/* BEST SELLERS Section */}
          <div className='flex items-center gap-2'>
            <div className='flex-1 h-[2px] bg-[#414141]'></div>
            <p className='delius-regular font-medium text-sm md:text-base'>BEST PRODUCTS</p>
            <div className='flex-1 h-[2px] bg-[#414141]'></div>
          </div>
          
          <h1 className='delius-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>New Pet Gear</h1>
          
          {/* SHOP NOW Section */}
          <div className='flex items-center gap-2'>
            <div className='flex-1 h-[2px] bg-[#414141]'></div>
            <p className='delius-regular font-semibold text-sm md:text-base'>SHOP TODAY</p>
            <div className='flex-1 h-[2px] bg-[#414141]'></div>
          </div>
        </div>
      </div>
      {/* Hero Right */}
      <img className='w=full sm:w-1/2' src={assets.front_image1} alt=""/>
    </div>
  )
}

export default Hero
