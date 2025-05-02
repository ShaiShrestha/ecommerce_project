import userModel from "../models/userModel.js"


// add products to cart
const addToCart = async (req,res) => {
    try {

        const {userId, itemId, size, color} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

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

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success: true, message: "Added To Cart"})
        
    } catch (error) {
        console.log(error)
        res.jsom({success: false, message: error.message})



        
    }

}

// update user cart
const updateCart = async (req,res) => {
    try {
        const {userId, itemId, size, color, quantity} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][size][color] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success: true, message: "Cart Updated"})


    } catch (error) {
        console.log(error)
        res.jsom({success: false, message: error.message})



        
    }

}

// get user cart data
const getUserCart = async (req,res) => {

    try {
        const {userId} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({success: true, cartData})

        
    } catch (error) {
        console.log(error)
        res.jsom({success: false, message: error.message})


        
    }

}


export {addToCart, updateCart, getUserCart}