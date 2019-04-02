
const mongoose = require('mongoose');
var trade = mongoose.model('tradeWin');

  // GET ALL products
  module.exports.getAllProducts= function(req,res){
  trade
 // .find() finds all instances in the database that match 
 //the query you pass in.
 // It returns an array, even if there is only one item in the array.
 // No query passed in means "find everything"
   .find()
   .exec(function(error,product){
    // console.log("found products ",product.length);

    // Note that this error doesn't mean nothing was found,
    // it means the database had an error while searching, 
    //hence the 500 status
    if (error) res.send(error)
     res
    .status(200)
    .json(product);
     })
  };


 //GET ONE product Details by ID
 module.exports.getOneProduct = function(req,res){
 var product = req.params.productId;
 trade
 //Finds a single object in the database by the provided id.
  .findById(product)
  .exec(function(error,product){
  console.log(product)
  if (error) res.send(error)
  res
  .status(200)
  .json(product);
    })
  }

  // POST adding NEW product 
  module.exports.addOneProduct=(req,res)=>{
  // Assuming this is from a POST request and the body of the
 // request contained the JSON of the new product to be saved
  var product=new trade(req.body);
  product.save((error,product)=>{
  // console.log(product)
 if (error) res.send(error);

      res
      .status(201)
      .json(product)
        })
  }

   //UPDATE product details using productId
   module.exports.updateOneProduct= function(req,res){
   var productId = req.params.productId;
    trade
   // This would likely be inside of a PUT request, 
   //since we're updating an existing document,
   // hence the req.params.productId.
   // Find the existing resource by ID
    .findByIdAndUpdate(productId,req.body,{new:true},(error,product)=>{
        if (error) res.send(error)
             res
              .status(200)
              .json(product)
           })
     }

     //DELETE product 
     module.exports.deletingOneProduct = function(req,res){
     var productId = req.params.productId;
     trade
      // based on ID we are removing document The product in this
      // callback function represents the document that was found.
       .findByIdAndRemove(productId)
       .exec(function(error,product){
      // console.log(product)
      if (error) res.send(error)
        res
           .status(200)
           .json(product);
         })
      }