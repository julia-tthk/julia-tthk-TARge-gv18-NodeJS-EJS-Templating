const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDirectory = require('../utilities/path');
const router = express.Router();

router.get('/add-product', function(req, res){
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'))
});

module.exports = router;