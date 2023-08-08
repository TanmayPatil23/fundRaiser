const mongoose = require("mongoose");

const applyFormSchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },
  lname: {
    type: String,
    require: true,
  },
  faname: {
    type: String,
    require: true,
  },
  moname: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  caste: {
    type: String,
    require: true,
  },
  income: {
    type: String,
    require: true,
  },
  udid: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  pin: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  temp1: {
    type: Boolean,
  },
  temp2: {
    type: Boolean,
  },
  temp3: {
    type: Boolean,
  },
  temp4: {
    type: Boolean,
  },
  temp5: {
    type: Boolean,
  },
});

const applyforms = new mongoose.model("applyforms", applyFormSchema);

module.exports = applyforms;
