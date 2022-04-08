const productService = require("../services/productService");

// == List ==

const onesublist = async (req, res) => {
    try {
        const id = req.params.id;
        const onesublist = await productService.getOnesublist(id)
        return res.status(200).json(onesublist)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


const twosublist = async (req, res) => {
    try {
        const id = req.params.id;
        const twosublist = await productService.getTwosublist(id)
        return res.status(200).json(twosublist)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}

const allList = async (req, res) => {
    try {
        const allList = await productService.getAlllist()
        return res.status(200).json(allList)
    } catch (err) {
        console.log(err)
        return res.status(err.status || 500).json({ message: err.message })
    }
}


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
        return res.status(200).json(allbestsell)
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
    console.log('1')
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
    allList,
    onesublist,
    twosublist,
    onesubBestsell,
    twosubBestsell,
    allbestsell,
    detailColors,
    detailSizes,
    detailCompositions,
    detail
};