const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  bookid: {
    type: Number,
    require: true,
    unique: true,
  },
  bookid: {
    type: String,
    require: true,
    unique: true,
  },
  counterpartyid: {
    type: Number,
    require: true,
  },
  securityid: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },

  status: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },
  buySell: {
    type: Number,
    require: true,
  },
  tradeDate: {
    type: Date,
    require: true,
  },
  settlementDate: {
    type: Date,
    require: true,
  },
});

const trade = new mongoose.model("tradeSchema", tradeSchema);

module.exports = trade;
