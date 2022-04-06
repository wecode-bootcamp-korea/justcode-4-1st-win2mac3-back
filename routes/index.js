const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const productRoute = require("./productRoute");


router.use('/user', userRoute)
router.use('/product', productRoute)



module.exports = router;