const cartService = require('../services/cartService');
const jwt = require('jsonwebtoken');
const YOUR_SECRET_KET = process.env.SECRET_KEY;

// // == Cart ==

const createCartItem = async (req, res) => {
    try {
        const clientToken = req.headers.authorization;
        const decoded = jwt.verify(clientToken, YOUR_SECRET_KET);
            
        for (i in req.body) {
            const { color_id, composition_id, product_id, quantity, size_id, price } = req.body[i]
            const createCartItem = await cartService.createCartItem(decoded.userId, color_id, composition_id, product_id, quantity, size_id, price);
        }
        return res.status(201).json("message : CREATE SUCCESS")
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const getCart = async (req, res) => {
    try {
        const id = req.params.id;
        const getCart = await cartService.getCart(id)
        return res.status(200).json(getCart)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


const deleteCartItem = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteCartItem = await cartService.deleteCartItem(id)
        return res.status(200).json("message : DELETE SUCCESS")
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const updateCartQuantity = async (req, res) => {
    try {
        const {id, quantity} = req.body
        const updateCartQuantity = await cartService.updateCartQuantity(id, quantity)
        return res.status(200).json("message : UPDATE SUCCESS")
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


module.exports = {
    createCartItem,
    getCart,
    deleteCartItem,
    updateCartQuantity
}