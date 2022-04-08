const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// == List == 

router.get('/onesublist/:id', productController.onesublist)
router.get('/twosublist/:id', productController.twosublist)
router.get('/alllist', productController.allList)


// == Best ==
router.get('/onesubbestsell/:id', productController.onesubBestsell)          // 차렵이불의 베스트 // 제품카테고리>침구 베스트용
router.get('/twosubbestsell/:id', productController.twosubBestsell)          // 차렵이불의 베스트 // 제품카테고리>침구>차렵이불 베스트용
router.get('/allbestsell', productController.allbestsell)                    // 모든제품의 베스트 // 메인메뉴 베스트용


// == Detail ==
router.get('/detail/colors', productController.detailColors)                    // detail colors 선택 옵션
router.get('/detail/sizes', productController.detailSizes)                      // detail sizes 선택 옵션
router.get('/detail/compositions', productController.detailCompositions)        // detail compositions 선택 옵션     // detail compositions 선택 옵션
router.get('/detail/:id', productController.detail)                             // detail 화면 표시


module.exports = router