const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

  fullName: String,
  email: String,
  phone: String,
  dob: String,
  gender: String,
  maritalStatus: String,
  department: String,
  jobTitle: String,
  employmentType: String,
  joiningDate: String,
  address: String

});

module.exports = mongoose.model("Employee", employeeSchema);