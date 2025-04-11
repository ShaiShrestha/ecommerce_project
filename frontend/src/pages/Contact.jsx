import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1 = {'CONTACT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_us} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='delius-regular font-semibold text-xl text-black'>Hounds Store</p>
          <p className='text-gray-500'>12345 Hounds St <br /> Suite 808, Dogma</p>
          <p className='text-gray-500'>Phone: 806-500-5665 <br /> Email: shailendra.shrestha24@gmail.com </p>
          <p className='delius-regular font-semibold text-black'>Opening Hire Options</p>
          <p className='text-gray-500'> Learn more about our teams and job openings to see if you want to be a part of Hounds.</p>
          <button className='border border-black  px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Job Openings</button>

        </div>

      </div>
      <NewsletterBox />
      
    </div>
  )
}

export default Contact
