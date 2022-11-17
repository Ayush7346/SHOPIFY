const express = require("express");
const cart_schema = require("../model/Cart");
const Product = require("../model/Product");
const router = express.Router();


const createCart = (x) => {

    const new_cart = new cart_schema({
        cart_id: x,
        product: []

    })

    new_cart.save().then(
        resp => {

        }
    )



}


router.post('/cart_add', (req, res) => {

    const { prod_id, cart_id } = req.body;

    Product.findById(prod_id).then((data) => {

        cart_schema.findOne({ cart_id }).then((prd) => {

            const newproduct = {
                prod_id: data._id,
                name: data.name,
                desc: data.desc,
                price: data.price
            }



            prd.product.push(newproduct);
            prd.save().then(
                (resp) => {
                    return res.status(200).json(resp);
                }
            )



        });
    });
});



module.exports = { router, createCart };
