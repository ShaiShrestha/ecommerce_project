// Description: This is the about page of the website. 
// It contains information about the website and its goals. 
// It also contains a newsletter box for users to subscribe to the newsletter.
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
        <div className='my-10 flex flex-col md:flex-row gap-8'>
          {/* Increased image size */}
          <img 
            className='w-full md:w-[600px] h-auto object-contain' 
            src={assets.about_icon} 
            alt="About us icon" 
          />
          <div className='flex flex-col justify-center gap-6 md:w-2/3 text-gray-600'>
            <p className='text-sm md:text-base'>
              At Hounds, we understand that pets are more than just animals—they’re family. Our online store is dedicated to providing high-quality pet products that cater to the needs of your furry, feathery, or scaly companions. Whether you’re looking for food, toys, grooming supplies, or accessories, we offer a carefully curated selection of top-rated brands to ensure your pet’s happiness and well-being. Our team is passionate about animals, and we’re committed to delivering exceptional service, quick shipping, and an easy shopping experience. We strive to help you provide the best for your pets, from their daily needs to their special moments.
            </p>
            <b className='text-gray-800 text-sm md:text-base'>Our Goal</b>
            <p className='text-sm md:text-base'>
              Our mission is to be the go-to destination for pet owners who want to give their pets the very best. We aim to provide a diverse range of products that support the health, comfort, and joy of pets of all kinds. By offering carefully sourced items from trusted brands and providing excellent customer service, we want to create a community of pet lovers who can rely on us to meet all their pets' needs. We're not just a pet shop—we're a partner in your pet's journey, ensuring every pet receives the love and care they deserve.
            </p>
          </div>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'HOUNDS?'}/>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Products</b>
            <p className='text-gray-600'>Each of our products are of high quality in order to satisify your pets.</p>

          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convinience</b>
            <p className='text-gray-600'>Our shop is a one stop shop for all of your pet needs. We offer the best deals.</p>

          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Amazing Customer Service</b>
            <p className='text-gray-600'>Our customer servise is 24/7 that will cater to all of your questions. we are here to help!</p>

          </div>

        </div>

      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
