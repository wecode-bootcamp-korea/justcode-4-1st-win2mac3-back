const cartDao = require("../models/cartDao");


// == Cart == 

const createCartItem = async (user_id, color_id, composition_id, product_id, quantity, size_id, price) => {

    return await cartDao.createCartItem(user_id, color_id, composition_id, product_id, quantity, size_id, price)
}

const getCart = async (id) => {
    return await cartDao.getCart(id)
}

const deleteCartItem = async (id) => {
    return await cartDao.deleteCartItem(id)
}

const updateCartQuantity = async (id, quantity) => {
    return await cartDao.updateCartQuantity(id, quantity)
}


module.exports = {
    createCartItem,
    getCart,
    deleteCartItem,
    updateCartQuantity
};