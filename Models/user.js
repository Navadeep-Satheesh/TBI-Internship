const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password:{
    type:String,
    unique: true,
    required: true,
  },
  email:{
    type:String,
    unique: true,
    required: true,
  },
  phone:{
    type:String,
    unique: true,
    required: true,
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
