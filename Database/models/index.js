const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  empId: {
    type: Number,
    unique: true,
  },
  jobTitle: {
    type: String,
    default: "Full Stack Web Devoloper",
  },
  experienceyear: {
    type: Number,
  },
  contactNumber: [
    {
      type: Number,
    },
  ],
  email: {
    type: String,
  },
});

const EmplyeeData = new mongoose.model("EmplyeeData", EmployeeSchema);

module.exports = EmplyeeData;
