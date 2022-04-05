
const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");


router.get('/onesubbestsell/:id', productController.onesubbestsell)          // 차렵이불의 베스트 // 제품카테고리>침구 베스트용
router.get('/twosubbestsell/:id', productController.twosubbestsell)          // 차렵이불의 베스트 // 제품카테고리>침구>차렵이불 베스트용
router.get('/allbestsell', productController.allbestsell)                    // 모든제품의 베스트 // 메인메뉴 베스트용


// router.get('', productController.allbestsell)


module.exports = router
