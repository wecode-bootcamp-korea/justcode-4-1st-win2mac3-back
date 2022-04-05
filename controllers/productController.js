const productService = require("../services/productService");


const bestsell = async (req, res) => {
    try {
        const id = req.params.id;
        const bestsell = await productService.getProductbestsell(id)
        return res.status(200).json({ bestsell })
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


module.exports = { bestsell, allbestsell };
