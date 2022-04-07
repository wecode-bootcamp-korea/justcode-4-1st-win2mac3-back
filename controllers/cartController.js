const { request } = require('express');
const cartService = require("../services/cartService");



// // == Cart ==

const cartwrite = async (req, res) => {
    try {
        for (i in req.body) {
            const { user_id, color_id, composition_id, product_id, quantity, size_id, price } = req.body[i]
            const cartwrite = await cartService.postCartwrite(user_id, color_id, composition_id, product_id, quantity, size_id, price);
        }
        return res.status(200).json('success')
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const cartread = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const cartread = await cartService.getCartread(id)
        console.log(cartread)
        return res.status(200).json(cartread)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


const cartdelete = async (req, res) => {
    try {
        const id = req.params.id;
        const cartdelete = await cartService.getCartdelete(id)
        return res.status(200).json("DELETE!")
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

module.exports = {
    cartwrite,
    cartread,
    cartdelete
}