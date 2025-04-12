// Description: This is the collection page of the website. It shows all the products in the store. 
// It also has a filter and sort functionality. The filter functionality allows the user to filter the products by category and subcategory. 
// The sort functionality allows the user to sort the products by price. The page also has a search functionality that allows the user to search for products by name. 
// The page is responsive and works well on mobile devices.
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
const Collection = () => {

  const {products, search , showSearch} = useContext(ShopContext); // Importing products and search from context
  const [showFilter, setShowFilter] = useState(false); // State to control the visibility of the filter options
  const [filterProducts, setFilterProducts] = useState([]); // State to store filtered products
  const [category, setCategory] = useState([]); // State to store selected categories
  const [subCategory, setSubCategory] = useState([]); // State to store selected subcategories
  const [sortType, setSortType] = useState('relevant'); // State to store selected sort type

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value)); // Remove category if already selected

    }
    else{
      setCategory(prev=> [...prev, e.target.value]); // Add category if not selected
    }

  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value)); // Remove subcategory if already selected

    }
    else{
      setSubCategory(prev=> [...prev, e.target.value]); // Add subcategory if not selected
    }

  }

  const applyFilter = () => {
    let productsCopy = products.slice(); // Create a copy of the products array

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase())); // Filter products by search term
    }

    if (category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category)); // Filter products by selected categories
    }

    if (subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subcategory)); // Filter products by selected subcategories
    }
    
    setFilterProducts(productsCopy); // Update the filtered products state



  }


  const sortProduct = () => {
    let fpCopy = filterProducts.slice(); // Create a copy of the filtered products array
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price))); // Sort products by price low to high
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price))); // Sort products by price high to low
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter(); // Apply filters whenever the products, category, subCategory, search, or showSearch changes

  }, [category, subCategory, search, showSearch]);

  useEffect(()=>{
    sortProduct();
  },[sortType])


  return ( // Render the collection page
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*filter options*/}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.filter_icon} alt="" />
        </p>
        {/*Category filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Catagories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'Dogs'} onChange={toggleCategory} /> Dogs
            </p>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'Cats'} onChange={toggleCategory} /> Cats
            </p>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'Others'} onChange={toggleCategory} /> Others
            </p>

          </div>

        </div>
        {/*Subcategory filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Product Types</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'Accessories'} onChange={toggleSubCategory}/> Accessories
            </p>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'Leashes & Harnesses'} onChange={toggleSubCategory}/> Leashes & Harnesses
            </p>
            <p className='flex gap-2'>
              <input className= 'w-3' type='checkbox' value={'Toys'} onChange={toggleSubCategory}/> Toys
            </p>

          </div>

        </div>


      </div>

      {/*Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/*Product sorting */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>

          </select>

        </div>
        {/* Mapping the Products*/}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }


        </div>

      </div>
      
    </div>
  )
}

export default Collection
