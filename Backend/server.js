const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express= require("express");
const bodyParser=require('body-parser');
const cors=require("cors");
const app=express();
const formidable=require('formidable');
const { request } = require("express");
const fs = require('fs');
const multer = require('multer');
const session = require('express-session');
const router = require("./routes/router");

//middlewares
app.use(cors());
app.use(express.json());
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use(express.static(__dirname+('/public')));


dotenv.config({path: "./config.env"});

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //family: 4
}).then(()=> {
    console.log("Connection Successfull");
}).catch((err)=> console.log(err));



const PORT= process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server running at port no ${PORT}`);
});
  


/*************************************************************************/ 




