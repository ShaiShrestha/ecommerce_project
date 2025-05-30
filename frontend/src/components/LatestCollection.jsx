// Importing React and necessary hooks
// Description: This component displays the latest collection of products in a grid format.
import React, { useState, useContext, useEffect } from 'react'; // Import useContext
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem'; // Import the ProductItem component


const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        setLatestProducts(products.slice(0,5));
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'PRODUCTS'}/>
        <p className ='delius-regular w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Newest arrivals for your furry friends. Shop the latest collection of pet gear and accessories, designed to keep your pets happy and stylish.
        </p>
      </div>

      {/* Rendering Latest Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>  

    </div>
  )
}

export default LatestCollection
