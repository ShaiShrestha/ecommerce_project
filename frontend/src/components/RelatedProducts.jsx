// Description: This component displays related products based on the category and subcategory of the current product being viewed. 
// It uses the ShopContext to access the list of products and filters them accordingly. 
// The filtered products are then displayed in a grid format, with each product represented by a ProductItem component. 
// The component also includes a title section that indicates the purpose of the displayed products.
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext); // Importing products from context
    const [related, setRelated] = useState([]); // Initialize state for related products

    
    useEffect(() => {
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=>category===item.category);
            productsCopy = productsCopy.filter((item)=>subCategory===item.subcategory);

            setRelated(productsCopy.slice(0,5));
        }

    },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

            ))}

        </div>
      
    </div>
  )
}

export default RelatedProducts
