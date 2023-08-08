const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
    unique: true,
  },
  isin: {
    type: Number,
    require: true,
    unique: true,
  },
  cusip: {
    type: Number,
    require: true,
  },
  issuer: {
    type: String,
    require: true,
  },
  maturityDate: {
    type: Date,
    require: true,
  },
  Coupon: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  faceValue: {
    type: Number,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
  },
});

const security = new mongoose.model("securitySchema", securitySchema);

module.exports = security;
