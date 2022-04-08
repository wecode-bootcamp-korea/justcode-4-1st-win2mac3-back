const express =require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get('/',userController.verifyToken);
router.use(userController.valideteForm);
router.post('/signup',userController.signUp);
router.post('/login',userController.signIn);
