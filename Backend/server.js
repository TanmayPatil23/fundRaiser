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




var nehal = "ACed813f1d3a8a9efc68501f8dedcb30e2";
var auth_token = "72bd2bfd1b7b3de9475224bf6c6e101a";

var twilio = require("twilio")(nehal, auth_token);

// twilio.messages
//   .create({
//     from: "+12184167398",
//     to: "+918815836151",
//     body: "Your application has been received!!",
//   })
//   .then(function(res) {console.log("message has sent!")})
//   .catch(function(err)  {
//     console.log(err);
//   });

  app.post("/twilio1", async (req, res) => {
    twilio.messages
    .create({
      from: "+12184167398",
      to: "+918815836151",
      body: "Your application has been received!!",
    })
    .then(function(res) {console.log("message has sent!")})
    .catch(function(err)  {
      console.log(err);
    });
  });

  app.post("/twilio2", async (req, res) => {
    twilio.messages
    .create({
      from: "+12184167398",
      to: "+918815836151",
      body: "Application is under verification!!",
    })
    .then(function(res) {console.log("message has sent!")})
    .catch(function(err)  {
      console.log(err);
    });
  });

  app.post("/twilio3", async (req, res) => {
    twilio.messages
    .create({
      from: "+12184167398",
      to: "+918815836151",
      body: "Application is successfully verified!!",
    })
    .then(function(res) {console.log("message has sent!")})
    .catch(function(err)  {
      console.log(err);
    });
  });

  app.post("/twilio4", async (req, res) => {
    twilio.messages
    .create({
      from: "+12184167398",
      to: "+918815836151",
      body: "Congratulations!! Aid Dispatched",
    })
    .then(function(res) {console.log("message has sent!")})
    .catch(function(err)  {
      console.log(err);
    });
  });

const PORT= process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server running at port no ${PORT}`);
});
  


/*************************************************************************/ 

/*
const agencyuserSchema = mongoose.Schema({
  agencyname:{
      type :String
  }, 
  username:{
      type:String
  },
  password:{
      type:String
  }
})

const agencyofficials = mongoose.model('agencyofficials', agencyuserSchema);
  app.post("/agencylogin", async (req, res) => {
    const { agencyname, username, password } = req.body;
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     });
    const user = await agencyofficials.findOne({ username });
    if (!user || user.password !== password) {
      res.status(403);
      res.json({
        message: "invalid login",
      });
      return;
    }
    res.status(200).json({message: "Agency official Logged in successfully"});
  });
*/

/*************************************************************************/

/*
const formSchema = mongoose.Schema({
  name: String,
  img:{
    data : Buffer,
    contentType : String
  }
});

module.exports = applyforms = mongoose.model('applyforms',formSchema);

const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,'uploads');
  },
  filename : (req,file,cb)=>{
    cb(null,file.originalname);
  }
});

const upload = multer({
storage : storage,
})

app.post("/userdashboard",upload.single('testImage'),(req,res)=>{
  const saveImage = new applyforms({
    name : req.body.name,
    img : {
      data : fs.readFileSync('uploads/' + req.file.filename),
      contentType : "image/png"
    }
  });

  saveImage
  .save()
  .then((res)=>{console.log('image is saved');
  })
  .catch((err)=>{
    console.log(err,'error has occured');
  });

  res.redirect('http://localhost:3000');
});
*/

/**************************************************************************/

/*
const agencyformSchema = mongoose.Schema({
  name:{
    type : String,
    trim : true,
    required : true
  },
  photo:{
    data : Buffer,
    contentType : String
  }
})

const agencyforms = mongoose.model('agencyforms',agencyformSchema);

app.post("/agencyapplyform",(req,res)=>{
  const form = new formidable.IncomingForm();
  form.parse(req,(err,fields,file)=>{
      
    if(fields)
    {
        const {name} = fields
        if(!name)
        {
            return res.status(400).json({
              error : "Fill all the fields"
            })
        }
    }
  
    if(file.photo)
    {
      if(file.photo.size>4000000)
      {
        return res.status(400).jason({
          error : "Image size exceeds limit"
        })
      }

      const user = new agencyforms(fields)
      user.photo.data = fs.readFileSync(file.photo.filepath)
      user.photo.contentType = file.photo.type

      user.save((err,user)=>{
        if(err)
        {
          return res.status(400).json({
            error : "Error in saving in DB"
          })
        }
        return res.json(user);
      })
    }

  })
});

app.get("/agencyapplications",async(req,res)=>{
    const allData = await applyforms.find()
    res.json(allData)
})*/

/**************************************************************************/




