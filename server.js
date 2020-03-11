const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/shop');//injecting code from shop.js
const adminRoute = require('./routes/admin');//injecting code from admin.js
const errorPage = require('./controllers/404');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(userRoute);
app.use('/admin', adminRoute.router);


app.use(errorPage.getErrorPage);


app.listen(2000, ()=> {
    console.log("Server is running on Port 3000.");
})