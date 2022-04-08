<<<<<<< HEAD
const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const productRoute = require("./productRoute");

router.use('/product', productRoute)

=======
const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const productRoute = require("./productRoute");
const cartRoute = require("./cartRoute");


router.use('/user', userRoute)
router.use('/products', productRoute)
router.use('/cart', cartRoute)


>>>>>>> 748da157c873548f60bc950e4746309a90935619
module.exports = router;