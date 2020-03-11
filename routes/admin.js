const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDirectory = require('../utilities/path');
const productsController = require('../controllers/products');
const router = express.Router();
//const products = [];


router.get('/add-product', productsController.getAddProductPage);

router.post('/add-product', productsController.postAddProducts);

module.exports = router;
//exports.router = router;
//exports.products = products;