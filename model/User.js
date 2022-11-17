const mongo = require("mongoose");
const Schema = mongo.Schema;

const user_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  }
});

module.exports = mongo.model("user_schema", user_schema);
