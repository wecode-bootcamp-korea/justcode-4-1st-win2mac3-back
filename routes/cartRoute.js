const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");


// == Cart == 

router.post('', cartController.createCartItem)                      // 장바구니 목록 추가
router.get('/:id', cartController.getCart)                          // 장바구니 목록 읽어오기
router.delete('/:id', cartController.deleteCartItem)                // 장바구니 목록 삭제
router.put('/:id', cartController.updateCartQuantity)               // 장바구니 수량 변경



module.exports = router