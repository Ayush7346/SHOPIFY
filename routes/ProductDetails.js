const express = require('express');
const router = express.Router();


const Product = require('../model/Product')

router.get('/getProduct', (req, res) => {

   Product.find().then(
      data => {
         return res.status(200).json(data);
      }

   ).catch(
      err => {
         return res.status(400).json(err);
      }
   )
})

router.post('/addProduct', (req, res) => {

   const {name, desc, price} = req.body

   const new_product = new Product({
      name, desc, price
   })
   
   new_product.save().then(
      data =>{
        return res.status(200).json(data);
      }
   )

})

module.exports = router;