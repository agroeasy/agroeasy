const Product = require('../models/product');

//Simple version, without validation or sanitation
exports.productCreate = function (req,res){
    //post new products to the database
     const product = new Product();
     //body parser lets us use the req.body
     const {
         name,
         quantity, 
         typeOfProduct, 
         createdAt, 
         updatedAt, 
         deletedAt
     } = req.body;
     product.name = name;
     product.quantity = quantity;
     product.typeOfProduct = typeOfProduct;
     product.createdAt = createdAt;
     product.updatedAt = updatedAt;
     product.deletedAt = deletedAt;
 
     product.save(err=> {
       if (err) return res.json({success: false, error: err});
       return res.json({ success: true, message: 'Product successfully added!' });
     });
   };

//finds only products in the db with given id
exports.productDetails = function(req, res){
        Product.findById(req.params.id, (err, products) => {
          if (err) return res.json({ success: false, error: err });
          return res.json({ success: true, data: products });
        });
   };

//finds all products in the db
exports.allProductsDetails = function(req, res){
       Product.find((err,products)=>{
           if(err) return res.json({success: false, error:err});
           return res.json({success: true, data: products});
       })
};

//deletes products using id
exports.productDelete = function(req, res){
    Product.findByIdAndRemove(req.params.id, (err)=>{
      if (err) return res.json({success: false, error: err});
      return res.json({ success: true, message: 'Product successfully deleted!' });
     });
    }

// updates product using id
exports.productUpdate = function(req, res){
    Product.findByIdAndUpdate(req.params.id, (err)=>{
      if (err) return res.json({success: false, error: err});
      return res.json({ success: true, message: 'Product successfully updated!' });
     });
    }