const mongoose = require("mongoose");

const agencyFormSchema = new mongoose.Schema({
  agencyname: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const agencyofficials = new mongoose.model("agencyofficials", agencyFormSchema);

module.exports = agencyofficials;
