const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const validateForm = require("../middlewares/validateForm")
const validateToken = require("../middlewares/validateToken")

router.get('/verify', validateToken.validateToken);
router.post('/signup', validateForm.validateForm, userController.signUp);
router.post('/login', validateForm.validateForm, userController.signIn);

module.exports = router;