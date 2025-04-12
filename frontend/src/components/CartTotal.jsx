// Description: This component calculates the total amount of the cart, including delivery fees and subtotal. 
// It uses the ShopContext to get the currency and delivery fee values. 
// The component is styled using Tailwind CSS classes for a clean and modern look.
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    
    const{currency,delivery_fee,getCartAmount} = useContext(ShopContext);// Importing context values

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1 = {'TOTAL'} text2={'AMOUNT'}/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{getCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Delivery Fee</p>
                <p>{currency}{delivery_fee}.00</p>

            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Tax Rate</p>
                <p>{currency}8.5%</p>

            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Order Total</b>
                <b>{currency}{getCartAmount() === 0 ? 0 : ((getCartAmount() + delivery_fee)*1.085).toFixed(2)}</b>
            </div>

        

        </div>
      
    </div>
  )
}

export default CartTotal
