const Producer = require('../models/producer');


exports.producerCreate = function (req,res){
    //post new producer to the database
     const producer = new Producer();
     //body parser lets us use the req.body
     const {
         firstName,
         lastName,
         phoneNumber,
         country,
         state,
         localGovernment,
         address,
         typeOfProducts,
         createdAt,
         updatedAt,
         deletedAt
      } = req.body;
      
     producer.firstName = firstName;
     producer.lastName = lastName;
     producer.phoneNumber = phoneNumber;
     producer.country = country;
     producer.state = state;
     producer.localGovernment = localGovernment;
     producer.addresse = address;
     producer.typeOfProducts = typeOfProducts;
     producer.createdAt = createdAt;
     producer.updatedAt = updatedAt;
     producer.deletedAt = deletedAt;
  
     producer.save(err=> {
       if (err) return res.json({success: false, error: err});
       return res.json({ success: true, message: 'Producer successfully added!' });
     });
   };

//find producers by id
exports.producerDetails = function(req,res){
       Producer.findById(req.params.id, (err,producers)=>{
           if(err) return res.json({success: false, error: err});
           return res.json({success: true, data: producers});
       });
   }

//finds all the producers in the database
exports.allProducersDetails = function(req, res){
    Producer.find((err,producers)=>{
        if(err) return res.json({success: false, error:err});
        return res.json({success: true, data: producers});
    })
};

// deletes producer using id
exports.producerDelete = function(req, res){
    Producer.findByIdAndRemove(req.params.id, (err)=>{
      if (err) return res.json({success: false, error: err});
      return res.json({ success: true, message: 'Producer successfully deleted!' });
     });
    }

// updates producer using id
exports.producerUpdate = function(req, res){
    Producer.findByIdAndUpdate(req.params.id, (err)=>{
      if (err) return res.json({success: false, error: err});
      return res.json({ success: true, message: 'Producer successfully updated!' });
     });
    }