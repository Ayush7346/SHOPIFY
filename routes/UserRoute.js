const express = require('express');
const router = express.Router();
const user_schema = require('../model/User')
const cart_schema = require('../model/Cart');
const { createCart } = require('./CartRoute');


router.post('/registeruser' , (req,res) =>{
    
    const {name,email,password} = req.body;
    
     const new_user = new user_schema({
          name , email,password
     })
     
     new_user.save().then(
        
        resp =>{
             
             createCart(resp._id);      
             return res.status(200).json(resp);
        }
     )

})

module.exports = router;