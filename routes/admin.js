const express = require('express');

const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();

const products = [];

// [GET] /admin/add-product
router.get('/add-product', adminController.getAddProduct);

// [GET] /admin/p
router.get('/products', adminController.getProducts);

// [POST] /admin/add-product
router.post('/add-product', adminController.postAddProduct);

module.exports = router;