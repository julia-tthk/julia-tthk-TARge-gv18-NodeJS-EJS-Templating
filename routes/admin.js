const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDirectory = require('../utilities/path');
const router = express.Router();
const products = [];


router.get('/add-product', function(req, res){
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'))
});

router.post('/add-product', function(req, res){
    console.log(req.body.title);
    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports = router;