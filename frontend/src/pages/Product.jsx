import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const{productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');


  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }

    })

  }

  useEffect(()=>{
    fetchProductData();

  },[productId, products])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product DATA */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }

          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/*Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.paw_icon} alt="" className='w-3.5' />
            <img src={assets.paw_icon} alt="" className='w-3.5' />
            <img src={assets.paw_icon} alt="" className='w-3.5' />
            <img src={assets.paw_icon} alt="" className='w-3.5' />
            <img src={assets.dull_paw_icon} alt="" className='w-3.5' />
            <p className='pl-2'>(9452)</p>
            
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-t text-gray-600 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-300 ${item == size ? 'border-black': ''}`} key={index}>{item}</button>
              ))}

            </div>
            {
                Array.isArray(productData.colors) && productData.colors.length > 0 && (
                  <div className='flex flex-col gap-4'>
                    <p>Select Color</p>
                    <div className='flex gap-2'>
                      {productData.colors.map((item, index) => (
                        <button 
                          onClick={() => setColor(item)} 
                          className={`border py-2 px-4 bg-gray-300 ${item === color ? 'border-black' : ''}`} 
                          key={index}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )
            }

          </div>
          
          <button onClick={()=>addToCart(productData._id, size, color)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Great feedback on product with various customers.</p>
            <p>Product is of high quality.</p>
            <p>30-day return policy is active on this product.</p>
          </div>
        </div>

      </div>
      {/*descripiton and review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review (9452)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>The product is guranteed to be of top quality. Meaning the materials used on the products are premium.</p>
          <p>Products are durable, fun, and safe for your furry companions. They come in many sizes and colors to tend to any personal prefrences.</p>      
        </div>
      </div>

      {/* Display Related */}
      <RelatedProducts category={productData.category} subCategory={productData.subcategory} />

      
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
