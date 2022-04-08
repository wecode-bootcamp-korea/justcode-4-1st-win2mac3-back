const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");


// == Cart == 

router.post('/write', cartController.cartwrite)
router.get('/read/:id', cartController.cartread)
router.get('/delete/:id', cartController.cartdelete)
router.post('/quantityminus', cartController.quantityminus)
router.post('/quantityplus', cartController.quantityplus)
// router.post('/cartread', cartController.cartread)


module.exports = router