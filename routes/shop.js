const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const router = express.Router();

router.get('/', function(req, res){
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
});

module.exports = router;