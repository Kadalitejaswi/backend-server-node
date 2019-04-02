const express = require('express');
var router = express.Router();

 // requiring product controller file
const productCtrl = require('../controllers/products.controller');
 
 //Map GET request on /products uri
 // this will response to all product details
router
.route('/products')
.get(productCtrl.getAllProducts);
  
 
  // Map POST request on /products/new uri
 router
.route('/products/new')
.post(productCtrl.addOneProduct);


 //Map GET request on /products/:productId uri
router
.route('/products/:productId')
.get(productCtrl.getOneProduct);

  
  // Map PUT request on /products/:productId uri
router
.route('/products/:productId')
.put(productCtrl.updateOneProduct);

   // Map DELETE request on /products/:productId uri
router
.route('/products/:productId')
.delete(productCtrl.deletingOneProduct);

module.exports =router;







