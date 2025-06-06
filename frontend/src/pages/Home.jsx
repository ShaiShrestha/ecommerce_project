// description: Home page component for the e-commerce website
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => { // Home component
  return ( // JSX to render the home page
    <div>
      <Hero /> 
      <LatestCollection />
      <BestSeller /> 
      <OurPolicy/> 
      <NewsletterBox/> 
    </div>
  )
}

export default Home
