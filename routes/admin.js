const express = require("express");
// const { check, } = require("express-validator");

const router = express.Router();
const authController = require("../controllers/admin");

router.get('/login', authController.getAdminLogin);

router.get('/dashboard', authController.getAdminDashboard);

router.get('/add-product', authController.getAddProduct);
router.post('/add-product',authController.postAddProduct);

router.get('/products', authController.getViewProducts);

router.get('/product-detail/:id', authController.getProductDetail);

router.post('/products/search', authController.getQueryProducts);
router.post('/edit-product/search',authController.postEditQueryProducts);
router.post('/delete-product/search', authController.postDeleteQueryProducts);

router.get('/edit-product', authController.getEditProduct);
router.get('/edit-product/:id', authController.editProduct);
router.post('/edit-product/:id', authController.postEditProduct);


router.get('/delete-product', authController.getDeleteProduct);
router.get('/delete-product/:id', authController.postdeleteProduct);

router.get('/new-orders', authController.getNewOrders);

router.get('/all-orders', authController.getAllOrders);

router.get('/settings', authController.getAdminSettings);

router.post('/deliver', authController.postDeliver);

module.exports = router;
