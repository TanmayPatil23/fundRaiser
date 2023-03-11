const mongoose=require("mongoose");

const agencyFormSchema = new mongoose.Schema({
    type : {
        type:String,
        require:true
    },
    name : {
        type:String,
        require:true,
        unique:true
    },
    email : {
        type:String,
        require:true
    },
    phone : {
        type:String,
        require:true
    },
    website : {
        type:String,
        require:true,
    },
    address : {
        type:String,
        require:true
    },
    district : {
        type:String,
        require:true
    },
    state : {
        type:String,
        require:true
    },
    pin : {
        type:String,
        require:true
    },
    year : {
        type:String,
        require:true
    },
    cin : {
        type:String,
        require:true
    },
    pan : {
        type:String,
        require:true
    },
    logo :{
        type:String,
    },
    desc : {
        type:String,
        require:true
    }
})

const agencyforms = new mongoose.model("agencyforms",agencyFormSchema);

module.exports = agencyforms;