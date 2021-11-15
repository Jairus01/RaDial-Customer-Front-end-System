const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.applicant = require("./received-applicant.model");
db.vacancy = require("./vacancy.model");
db.subscribe = require("./subscribe.model");

module.exports = db;