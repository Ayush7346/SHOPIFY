const mongo = require("mongoose");
const mongoKey = require("./Config/Key").mongoKey;
const express = require("express");
const app = express();
const productRoute = require('./routes/ProductDetails');
const bodyParser = require("body-parser");
const CartRoute = require('./routes/CartRoute').router
const UserRoute = require('./routes/UserRoute')
const path = require('path');

mongo.connect(mongoKey , {dbName:"SHOPIFY"}).then((e) => {
  console.log("mongo connected");
});


app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }))
app.use(bodyParser.json({ limit: '100mb' })),

app.use('/product' , productRoute);
app.use('/cart',CartRoute);
app.use('/user', UserRoute);


app.use(express.static(path.join(__dirname, "./shopify-frontend/build")));

app.get("*", function(_, res) {
    res.sendFile(
        path.join(__dirname, "./shopify-frontend/index.html"),
        function (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    )
})

app.listen(8080, () => {
  console.log("port : 8080");
});
