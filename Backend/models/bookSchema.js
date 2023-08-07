const mongoose=require("mongoose");

const bookSchema = new mongoose.Schema({
    id : {
        type:Number,
        require:true,
        unique:true
    },
    name : {
        type:String,
        require:true,
        unique:true
    },
})

const bookSchema = new mongoose.model("bookSchema",bookSchema);

module.exports = bookSchema;
