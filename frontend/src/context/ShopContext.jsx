import { createContext, useEffect, useState } from "react";
import {products} from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size, color) => {
        let cartData = structuredClone(cartItems);
    
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

    useEffect(()=>{
        console.log(cartItems);

    },[cartItems])


    const value = {
        products, currency, delivery_fee, 
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart

    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
