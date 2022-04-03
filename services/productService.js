const productDao = require("../models/productDao");

const arrangeNewItems = async () => {
    return await productDao.arrangeNewItems();
}

module.exports = {arrangeNewItems};
