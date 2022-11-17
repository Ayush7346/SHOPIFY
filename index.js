const mongo = require("mongoose");
const mongoKey = require("./Config/Key").mongoKey;
const express = require("express");
const app = express();
const productRoute = require('./routes/ProductDetails');
const bodyParser = require("body-parser");
const CartRoute = require('./routes/CartRoute').router
const UserRoute = require('./routes/UserRoute')


mongo.connect(mongoKey , {dbName:"SHOPIFY"}).then((e) => {
  console.log("mongo connected");
});


app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }))
app.use(bodyParser.json({ limit: '100mb' })),

app.use('/product' , productRoute);
app.use('/cart',CartRoute);
app.use('/user', UserRoute);


app.listen(8080, () => {
  console.log("port : 8080");
});
