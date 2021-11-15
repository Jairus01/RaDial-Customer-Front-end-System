const mongoose = require("mongoose");

const receivedApplicant = mongoose.model(
  "Received-Applicant",
  new mongoose.Schema({
    name: String,
    position_applied: String
  })
);

module.exports = receivedApplicant;
