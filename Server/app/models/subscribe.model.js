const mongoose = require("mongoose");

const Subscribe = mongoose.model(
  "Subscribe",
  new mongoose.Schema({
    
    service_name:String,
    start_date:Date,
    end_date:String,
    user_id:String,
  })
);

module.exports = Subscribe;
