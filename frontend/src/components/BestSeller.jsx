// Description: This component displays the best selling products in a grid format. 
// It uses the ShopContext to fetch product data and filters the products to show only the best sellers. 
// The filtered products are then displayed using the ProductItem component. 
// The component also includes a title and a description for better user experience.
// Importing necessary libraries and components
import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    // Importing context and initializing state
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    
    // useEffect to filter and set best selling products
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,10));
    },[products])

  return (
    <div className = 'my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2 ={'SELLERS'}/>
            <p className='delius-regular w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Check out the our best selling products that are perfect for your companions.
            </p>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </div>
      
    </div>
  )
}

export default BestSeller
