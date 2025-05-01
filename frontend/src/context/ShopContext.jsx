// Description: This file contains the ShopContextProvider component, which provides the context for the shop. 
// It includes functions to manage the cart, such as adding items, updating quantities, and calculating totals. 
// It also includes state variables for search functionality and delivery fees.
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext(); // Create a context for the shop

const ShopContextProvider = (props) =>{
    // State variables for products, currency, delivery fee, search term, and cart items

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token,setToken] = useState('')
    const navigate = useNavigate();

    
    const addToCart = async (itemId, size, color) => { // Function to add items to the cart
        let cartData = structuredClone(cartItems);

        if(!size){
            toast.error('Please select a size'); // Size validation
            return;
        }

        if(!color){
            toast.error('Please select a color'); // Color validation
            return;
        }
        // Check if the item already exists in the cart
        if (cartData[itemId]) {

            if (cartData[itemId][size]) { // Check if the size already exists
                if (color) {
                    if (cartData[itemId][size][color]) {
                        cartData[itemId][size][color] += 1;
                    } else {
                        cartData[itemId][size][color] = 1;
                    }
                } else {
                    cartData[itemId][size] += 1;
                }
            } else { // If the size doesn't exist, add it
                if (color) {
                    cartData[itemId][size] = { [color]: 1 };
                } else {
                    cartData[itemId][size] = 1;
                }
            }
        } else { // If the item doesn't exist, add it
            if (color) {
                cartData[itemId] = { [size]: { [color]: 1 } };
            } else {
                cartData[itemId] = { [size]: 1 };
            }
        }
    
        setCartItems(cartData); // Update the cart items state
    }
    // Function to get the total count of items in the cart
    const getCartCount = () => {
        let totalCount = 0;
    
        for (const itemId in cartItems) {
            const sizes = cartItems[itemId]; // Loop through each item in cartItems
    
            for (const size in sizes) {
                const colors = sizes[size]; // Loop through each size for the current item
    
                for (const color in colors) {
                    totalCount += colors[color]; // Add the quantity of each color to the total count
                }
            }
        }
    
        return totalCount;
    };

    // Function to update the quantity of items in the cart
    const updateQuantity = async (itemId, size, color, quantity) => {
        let cartData = structuredClone(cartItems);
    
        // If quantity is 0, remove the product from the cart
        if (quantity === 0) {
            if (cartData[itemId] && cartData[itemId][size] && cartData[itemId][size][color]) {
                delete cartData[itemId][size][color];
                // If the size has no more colors, delete the size as well
                if (Object.keys(cartData[itemId][size]).length === 0) {
                    delete cartData[itemId][size];
                }
                // If the item has no more sizes, delete the item completely
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        } else {
            // If quantity is greater than 0, just update it
            if (cartData[itemId] && cartData[itemId][size]) {
                cartData[itemId][size][color] = quantity;
            }
        }
    
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
    
        // Loop through each item in cartItems
        for (const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);
            
            // Loop through each size for the current item
            for (const size in cartItems[itemId]) {
                // Loop through each color for the current size
                for (const color in cartItems[itemId][size]) {
                    const quantity = cartItems[itemId][size][color];
    
                    if (quantity > 0) {
                        // Calculate the price for this specific quantity of item, size, and color
                        totalAmount += itemInfo.price * quantity;
                    }
                }
            }
        }
    
        return totalAmount;
    };
    
    const getProductsData = async () => {
        try {

            console.log("Backend URL:", backendUrl);

            
            const response = await axios.get(backendUrl + '/api/product/list');
            
             if (response.data.success){
                 setProducts(response.data.products)
             } else {
                 toast.error(response.data.message)

             }

        } catch (error) {
         console.log(error)
         toast.error(error.message)
        }
    }

    useEffect(()=>{
        getProductsData()
    },[])

    
    const value = { // Provide the context value to be used in the components
        products, currency, delivery_fee, 
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token
        

    }
    return( // Wrap the children components with the ShopContext.Provider
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
