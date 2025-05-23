// Description: This component is a newsletter subscription box that allows users to enter their email and subscribe to a newsletter. 
// It includes a title, description, and an input field for the email address, along with a submit button. 
// The component uses React for state management and event handling.
import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event)=> {
        event.preventDefault();

    }
  return (
    <div className ='text-center'>
      <p className='delius-regular text-2xl font-medium text-gray-800'>Subscribe now and get 15% off your next order.</p>
      <p className='text-gray-400 mt-3'>
        The subscription will inform you about our latest products and offers.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
