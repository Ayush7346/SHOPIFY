const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");
const Schema = mongose.Schema;

const cart_schema = new Schema({

  cart_id:{
    type: Schema.Types.ObjectId,
    ref:"user_schemas",
  },
  product: [
    {
        prod_id: {
          type: Schema.Types.ObjectId,
          ref:"product_schemas",
        },
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
        
      }
  
  ]
  
  
  
});


module.exports = mongoose.model("cart_item",cart_schema);
