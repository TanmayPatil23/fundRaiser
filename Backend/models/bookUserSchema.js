const mongoose = require("mongoose");

const bookUserSchema = new mongoose.Schema({
  bookid: {
    type: Number,
    require: true,
    unique: true,
  },
  userid: {
    type: String,
    require: true,
    unique: true,
  },
});

const bookUser = new mongoose.model("bookUserSchema", bookUserSchema);

module.exports = bookUser;
