//working with files
//fs - file system;

const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(bookTitle){
        this.title = bookTitle;
    }

    saveProduct() {
        //path to the product.json file
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'product.json'        
        );
        fs.readFile(dataPath, (error, fileContent) => {
            let products = [];
            if(!error){
                products = JSON.parse(fileContent);
            }
            products.push(this);

            //saving products array in json format to the file
            fs.writeFile(dataPath, JSON.stringify(products), (error) => {
                console.log(error);
            });

        });
        //before we save data to the file, we need to read it first

    }
    //to read the products.json file content
    static fetchAllProducts(callBack){
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'product.json'        
        );

        fs.readFile(dataPath, (error, fileContent) => {
            //in case of  error while opening the file
            if(error){
                return callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
    }
}