const mongoose = require("mongoose");

const Vacancy = mongoose.model(
  "Vacancy",
  new mongoose.Schema({
    
    company_name: String,
    company_location: String,
    job_desc: String,
    job_title: String,
    age: String,
    work_exp: String,
    edu_level: String,
    personalities: String,
    daily_budget: String,
    start_date:Date,
    close_date:String,
    owner:String,
    status:Boolean
  })
);

module.exports = Vacancy;
