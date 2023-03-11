const mongoose = require("mongoose");

const govtFormSchema = new mongoose.Schema({
    agencyname : {
        type:String,
        require:true,
        unique:true
    },
    username : {
        type:String,
        require:true,
    },
    password : {
        type:String,
        require:true
    }
})

const govtofficials = new mongoose.model("govtofficials",govtFormSchema);

module.exports = govtofficials;