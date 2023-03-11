const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true,
    },
    phone : {
        type:String,
        require:true,
    },
    email : {
        type:String,
        require:true,
    },
    desc : {
        type:String,
        require:true,
    },
})

const contactforms = new mongoose.model("contactforms",contactFormSchema);

module.exports = contactforms;