const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'shop.html'));
})

app.get('/admin/add-product', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'add-product.html'))
});

app.use(function(req, res, next){
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    console.log(path.join(__dirname, 'views', '404.html'));
});


app.listen(8000, ()=> {
    console.log("Server is running on Port 3000.");
})