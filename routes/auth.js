const express = require("express");
const { check, } = require("express-validator");

const router = express.Router();
const authController = require("../controllers/auth");

router.get("/login", authController.getLogin);

router.post('/login', [
    check('email')
        .isEmail()
        .withMessage('Please enter a valid email address.')
        .normalizeEmail(),
    check('password', 'Please Enter Valid Password.')
        .isLength({ min: 5 })
        .trim()
], authController.postLogin);

router.get("/signup", authController.getSignup);

router.post('/signup', [
    check('email')
        .isEmail()
        .withMessage('Please enter a valid email address')
        .normalizeEmail(),
    check('mobile')
        .isLength({ min: 10 })
        .withMessage('Please enter a valid mobile number'),
    check('password')
        .isLength({ min: 5 }, { max: 32 })
        .withMessage("Password must be atleast 5 chars long and should not exceed 32 chars")
        .matches(/\d/)
        .withMessage("Password Must Contain A Number")
], authController.postSignup);

router.post('/logout', authController.postLogout);

router.get("/user-details", authController.getDetails);

router.get('/reset-password-verify', authController.getResetVerify);

router.get('/reset-password', authController.getResetPassword);

module.exports = router;
