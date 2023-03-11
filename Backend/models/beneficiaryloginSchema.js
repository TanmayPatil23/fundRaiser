const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    udid:{
       type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }
})

const users = new mongoose.model("users", userSchema);

module.exports = users;