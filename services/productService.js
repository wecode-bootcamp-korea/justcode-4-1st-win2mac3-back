const productDao = require("../models/productDao");


const getProductbestsell = async (id) => {
    return await productDao.getProductbestsell(id)
}


const getallbestsell = async() => {
    return await productDao.getallbestsell()
}


module.exports = { getProductbestsell, getallbestsell };
