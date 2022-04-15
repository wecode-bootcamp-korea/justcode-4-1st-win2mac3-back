const productService = require("../services/productService");

// == List ==

const getOneSubList = async (req, res) => {
    try {
        const id = req.params.id;
        const onesublist = await productService.getOneSubList(id)
        return res.status(200).json(onesublist)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


const getTwoSubList = async (req, res) => {
    try {
        const id = req.params.id;
        const twosublist = await productService.getTwoSubList(id)
        return res.status(200).json(twosublist)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const getAllList = async (req, res) => {
    try {
        const getAllList = await productService.getAllList()
        return res.status(200).json(getAllList)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const getAllNewList = async (req, res) => {
    try {
        const getAllNewList = await productService.getAllNewList()
        return res.status(200).json(getAllNewList)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

// == Best ==

const getOneSubBest = async (req, res) => {
    try {
        const id = req.params.id;
        const getOneSubBest = await productService.getOneSubBest(id)
        return res.status(200).json({ getOneSubBest })
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const getTwoSubBest = async (req, res) => {
    try {
        const id = req.params.id;
        const getTwoSubBest = await productService.getTwoSubBest(id)
        return res.status(200).json({ getTwoSubBest })
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


const getAllBestList = async (req, res) => {
    try {
        const getAllBestList = await productService.getAllBestList()
        return res.status(200).json(getAllBestList)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

// == Detail == 

const detail = async (req, res) => {
    try {
        const id = req.params.id;
        const productsDetail = await productService.getDetail(id)
        return res.status(200).json(productsDetail[0])
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


const detailColors = async (req, res) => {
    try {
        const detailColors = await productService.getdetailColors()
        return res.status(200).json(detailColors)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const detailSizes = async (req, res) => {
    try {
        const detailSizes = await productService.getdetailSizes()
        return res.status(200).json(detailSizes)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const detailCompositions = async (req, res) => {
    try {
        const detailCompositions = await productService.getdetailCompositions()
        return res.status(200).json(detailCompositions)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

module.exports = {
    getAllList,
    getOneSubList,
    getTwoSubList,
    getOneSubBest,
    getTwoSubBest,
    getAllBestList,
    getAllNewList,
    detailColors,
    detailSizes,
    detailCompositions,
    detail
};