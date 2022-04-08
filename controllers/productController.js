const productService = require("../services/productService.js")

const arrangeNewItems = async(req, res) => {
    try {
        const newItems = await productService.arrangeNewItems()
        res.status(200).json(newItems)
    } catch (err) {
        console.log(err)
        return res.status(err.statusCode || 500).json({message: err.message});
    }
}

module.exports = {arrangeNewItems};
