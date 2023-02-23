const express = require('express');
const router = express.Router();


const Product = require('../model/Product')

router.get('/getProduct', (req, res) => {

   Product.find().sort({name : -1}).then(
      data => {
         return res.status(200).json(data);
      }

   ).catch(
      err => {
         return res.status(400).json(err);
      }
   )
})

router.get('/searchProduct/:id', (req, res) => {

const id = req.params.id;
   Product.findById(id).then(
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

   const {name, desc, price , picture_url} = req.body

   const new_product = new Product({
      name, desc, price, picture_url
   })
   
   new_product.save().then(
      data =>{
        return res.status(200).json(data);
      }
   )

})

module.exports = router;