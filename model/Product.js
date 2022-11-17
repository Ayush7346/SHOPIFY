
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
});

module.exports = mongoose.model("PRODUCT_SCHEMA" , product_model);
