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

const getallnewsell = async () => {
    return await productDao.getallnewsell();
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
    getallnewsell,
    getdetailColors,
    getdetailSizes,
    getdetailCompositions,
    getDetail
};