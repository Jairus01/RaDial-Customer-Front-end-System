const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    
    email: String,
    password: String,
    cname: String,
    caddress: String
  })
);

module.exports = User;
