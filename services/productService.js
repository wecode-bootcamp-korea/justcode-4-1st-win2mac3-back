const productDao = require("../models/productDao");

// == List ==

const getOneSubList = async (id) => {
    return await productDao.getSubList(id, 0)
}

const getTwoSubList = async (id) => {
    return await productDao.getSubList(0, id)
}

const getAllList = async () => {
    return await productDao.getAllList()
}

const getAllNewList = async () => {
    return await productDao.getAllNewList();
}


// == Best ==

const getOneSubBest = async (id) => {
    return await productDao.getSubBest(id, 0)
}


const getTwoSubBest = async (id) => {
    return await productDao.getSubBest(0, id)
}


const getAllBestList = async () => {
    return await productDao.getAllBestList()
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
    getAllList,
    getOneSubList,
    getTwoSubList,
    getOneSubBest,
    getTwoSubBest,
    getAllBestList,
    getAllNewList,
    getdetailColors,
    getdetailSizes,
    getdetailCompositions,
    getDetail
};