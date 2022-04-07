const cartDao = require("../models/cartDao");


// == Cart == 


const postCartwrite = async (user_id, color_id, composition_id, product_id, quantity, size_id, price) => {

    return await cartDao.postCartwrite(user_id, color_id, composition_id, product_id, quantity, size_id, price)
}

const getCartread = async (id) => {
    console.log(2)
    return await cartDao.getCartread(id)
}

const getCartdelete = async (id) => {
    return await cartDao.getCartdelete(id)
}


module.exports = {
    postCartwrite,
    getCartread,
    getCartdelete
};