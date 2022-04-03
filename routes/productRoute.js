const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController.js")

router.get('/list', productController.arrangeNewItems)

module.exports = router;
