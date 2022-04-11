const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get('/verify', userController.verifyToken);
router.post('/signup', userController.valideteForm, userController.signUp);
router.post('/login', userController.valideteForm, userController.signIn);

module.exports = router;