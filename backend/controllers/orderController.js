import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing order using COD
const placeOrder = async (req,res) =>{
    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cardData:{}})

        res.json({success: true, message: "Order Placed" })

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }

}

// Placing order using card
const placeOrderCard = async (req,res) =>{
    
}


// Placing order using papyal
const placeOrderPayPal = async (req,res) =>{
    
}

// All orders Data for Admin Panel

const allOrders = async (req,res) =>{
    try {
        const orders = await orderModel.find({})
        res.json ({success:true, orders})

        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
    
}

// User order for front end
const userOrders = async (req,res) =>{
    try {
        
        const {userId} = req.body

        const orders = await orderModel.find({ userId })
        res.json({success: true, orders })

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}


// update status from admin

const updateStatus = async (req,res) =>{
    try {
        const{orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message:'Status Updated'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})

        
    }
    
}

export {placeOrder, placeOrderCard, placeOrderPayPal, allOrders, userOrders, updateStatus}