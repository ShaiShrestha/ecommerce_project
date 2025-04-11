import { createContext, useEffect, useState } from "react";
import {products} from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size, color) => {
        let cartData = structuredClone(cartItems);

        if(!size){
            toast.error('Please select a size');
            return;
        }

        if(!color){
            toast.error('Please select a color');
            return;
        }
    
        if (cartData[itemId]) {

            if (cartData[itemId][size]) {
                if (color) {
                    if (cartData[itemId][size][color]) {
                        cartData[itemId][size][color] += 1;
                    } else {
                        cartData[itemId][size][color] = 1;
                    }
                } else {
                    cartData[itemId][size] += 1;
                }
            } else {
                if (color) {
                    cartData[itemId][size] = { [color]: 1 };
                } else {
                    cartData[itemId][size] = 1;
                }
            }
        } else {
            if (color) {
                cartData[itemId] = { [size]: { [color]: 1 } };
            } else {
                cartData[itemId] = { [size]: 1 };
            }
        }
    
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
    
        for (const itemId in cartItems) {
            const sizes = cartItems[itemId];
    
            for (const size in sizes) {
                const colors = sizes[size];
    
                for (const color in colors) {
                    totalCount += colors[color];
                }
            }
        }
    
        return totalCount;
    };

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
    

    const value = {
        products, currency, delivery_fee, 
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate
        

    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
