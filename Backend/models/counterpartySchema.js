const mongoose=require("mongoose");

const counterpartySchema = new mongoose.Schema({
    id : {
        type:Number,
        require:true,
        unique:true
    },
    name : {
        type:String,
        require:true
    }
})

const counterpartySchema = new mongoose.model("counterpartySchema",counterpartySchema);

module.exports = counterpartySchema;
