// Description: This file contains the Cart component which displays the items in the cart, allows users to update quantities, and proceed to checkout. 
// It uses React hooks and context for state management and navigation.
// Importing necessary modules and components

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext); // Importing context values

  const [cartData, setCartData] = useState([]); // Initialize state for cart data

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
  
      for (const itemId in cartItems) {
        const sizeMap = cartItems[itemId];
  
        for (const size in sizeMap) {
          const colorMap = sizeMap[size];
  
          for (const color in colorMap) {
            const quantity = colorMap[color];
  
            if (quantity > 0) {  // ✅ Only include if quantity > 0
              tempData.push({
                _id: itemId,
                size,
                color,
                quantity
              });
            }
          }
        }
      }
  
      setCartData(tempData);
    }
  }, [cartItems, products]);
  


  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'PET'} text2={'CART'} />

      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col sm:grid sm:grid-cols-[4fr_2fr_0.5fr] sm:items-center gap-4'>
                <div className='flex items-center gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.color}</p>

                    </div>
                  </div>

                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, item.color, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                <img onClick={() => updateQuantity(item._id, item.size, item.color, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.delete_icon} alt="Delete" />
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm py-3 px-8 my-8'>PROCEED TO CHECKOUT</button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
