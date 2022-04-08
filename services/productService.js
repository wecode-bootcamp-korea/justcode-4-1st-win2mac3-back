<<<<<<< HEAD
const productDao = require("../models/productDao");

const arrangeNewItems = async () => {
    return await productDao.arrangeNewItems();
}

module.exports = {arrangeNewItems};
=======
const productDao = require("../models/productDao");

// == List ==

const getOnesublist = async (id) => {
    return await productDao.getOnesublist(id)
}

const getTwosublist = async (id) => {
    return await productDao.getTwosublist(id)
}

const getAlllist = async () => {
    return await productDao.getAlllist()
}


// == Best ==

const getonesubBestsell = async (id) => {
    return await productDao.getonesubBestsell(id)
}


const gettwosubBestsell = async (id) => {
    return await productDao.gettwosubBestsell(id)
}


const getallbestsell = async () => {
    return await productDao.getallbestsell()
}


// == Detail == 

const getDetail = async (id) => {
    return await productDao.getDetail(id)
}

const getdetailColors = async () => {
    return await productDao.getdetailColors()
}

const getdetailSizes = async () => {
    return await productDao.getdetailSizes()
}

const getdetailCompositions = async () => {
    return await productDao.getdetailCompositions()
}

module.exports = {
    getAlllist,
    getOnesublist,
    getTwosublist,
    getonesubBestsell,
    gettwosubBestsell,
    getallbestsell,
    getdetailColors,
    getdetailSizes,
    getdetailCompositions,
    getDetail
};
>>>>>>> 748da157c873548f60bc950e4746309a90935619
