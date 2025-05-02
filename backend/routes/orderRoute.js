import express from 'express'
import {placeOrder, placeOrderCard, placeOrderPayPal, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import auth from '../middleware/auth.js'


const orderRouter = express.Router()

//Admin
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//payment
orderRouter.post('/place', auth, placeOrder)
orderRouter.post('/card', auth, placeOrderCard)
orderRouter.post('/pal', auth, placeOrderPayPal)

// ser feature
orderRouter.post('/userorders', auth, userOrders)

export default orderRouter

