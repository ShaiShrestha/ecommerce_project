// description: This component is used to display the policy of the website. 
// It contains three sections: 30 days return policy, quality products, and best customer support. 
// Each section contains an icon, a title, and a description. The component is responsive and adjusts its layout based on the screen size.
import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 ms:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'> 30 days Return Policy</p>
            <p className='delius-regular text-gray-400'>We offer a 100% money back on product returns within the first 30 days.</p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'> Quality Products</p>
            <p className='delius-regular text-gray-400'>All of our products are made for quality. They are great the benifits of your pets.</p>
        </div>

        <div>
            <img src={assets.service_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'> Best Customer Support</p>
            <p className='delius-regular text-gray-400'>We have a 24/7 customer service support for any help you need.</p>
        </div>

      
    </div>
  )
}

export default OurPolicy
