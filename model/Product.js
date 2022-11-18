
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const product_model = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  picture_url:{
  type:String,
  }
});

module.exports = mongoose.model("PRODUCT_SCHEMA" , product_model);
