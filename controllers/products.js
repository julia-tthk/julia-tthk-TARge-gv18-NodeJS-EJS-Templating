const products = [];

exports.getAddProductPage = 
    (req, res) => {
    res.render('add-product', {
        pageTitle: "Add New Product",
        path: "/admin/add-product"
    });
}

exports.postAddProducts = (req, res) => {
    console.log(req.body.title);
    products.push({title: req.body.title});
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    
    console.log(products);
    
    res.render('shop', {
        pageTitle: 'Welcome to My Shop!',
        products: products,
        path: '/'
    });
   // res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
}