const productService = require("../services/productService");

// == Best ==

const onesubBestsell = async (req, res) => {
    try {
        const id = req.params.id;
        const onesubBestsell = await productService.getonesubBestsell(id)
        return res.status(200).json({ onesubBestsell })
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const twosubBestsell = async (req, res) => {
    try {
        const id = req.params.id;
        const twosubBestsell = await productService.gettwosubBestsell(id)
        return res.status(200).json({ twosubBestsell })
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


const allbestsell = async (req, res) => {
    try {
        const allbestsell = await productService.getallbestsell()
        return res.status(200).json({ allbestsell })
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

// == Detail == 

const detail = async (req, res) => {
    try {
        const productsDetail = await productService.getDetail()
        return res.status(200).json({ productsDetail })
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


const detailColors = async (req, res) => {
    try {
        const detailColors = await productService.getdetailColors()
        return res.status(200).json({ detailColors })
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const detailSizes = async (req, res) => {
    try {
        const detailSizes = await productService.getdetailSizes()
        return res.status(200).json({ detailSizes })
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const detailCompositions = async (req, res) => {
    try {
        const detailCompositions = await productService.getdetailCompositions()
        return res.status(200).json({ detailCompositions })
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}








module.exports = { onesubBestsell, twosubBestsell, allbestsell, detailColors, detailSizes, detailCompositions, detail };