const express = require("express");
const router = express.Router();
const applyforms = require("../models/applyFormSchema");
const agencyforms = require("../models/agencyFormSchema");
const agencyofficials = require("../models/addagencyformSchema");
const govtofficials = require("../models/govtloginSchema");
const users = require("../models/beneficiaryloginSchema");
const contactforms = require("../models/contactFormSchema");
const multer = require('multer')

/*router.get("/",(req,res)=>{
    console.log("connect");
})*/

//Configuration for Multer
const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'public/logos', 
      filename: (req, file, cb) => {
        console.log(file);
          cb(null, file.fieldname + '_' + Date.now() 
             + ".png")
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});

const imageUpload = multer({
    storage: imageStorage,
}) 

// For Single image upload
router.post('/uploadLogo', imageUpload.single('company-logo'), (req, res) => {
    res.send(req.file.filename)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})


/****************************User Apply Form Data**********************************/

router.post("/apply",async(req,res)=>{
    //console.log(req.body);

    const {fname,lname,faname,moname,age,gender,caste,income,udid,email,phone,address,city,pin,state,temp1,temp2,temp3,temp4,temp5} = req.body;

    if(!fname||!lname||!faname||!moname||!age||!gender||!udid||!phone||!address||!pin||!caste||!income||!city||!state)
    {
        res.status(404).json("Please fill all the fields")
    }

    try
    {
        const preuser = await applyforms.findOne({udid:udid});
        if(preuser)
        {
            res.status(404).json("This UDID card has already applied!!")
        }
        else
        {
            const adduser = new applyforms({
                fname,lname,faname,moname,age,gender,caste,income,udid,email,phone,address,city,pin,state,temp1,temp2,temp3,temp4,temp5
            });

            await adduser.save();
            res.status(200).json(adduser);
        }
    }
    catch(error)
    {
        res.status(404).json(error);
    }

})




/************************************************************************************/


/****************************Agency Apply Form Data**********************************/

router.post("/agencyapplyform",async(req,res)=>{
    //console.log(req.body);

    const {type,name,email,phone,website,address,district,state,pin,year,cin,pan,desc} = req.body;

    if(!type||!name||!website||!district||!state||!email||!phone||!address||!pin||!year||!cin||!pan||!desc)
    {
        res.status(404).json("Please fill all the fields")
    }

    try
    {
        const preuser = await agencyforms.findOne({name:name});
        if(preuser)
        {
            res.status(404).json("This Agency has already applied!!")
        }
        else
        {
            const adduser = new agencyforms({
                type,name,email,phone,website,address,district,state,pin,year,cin,pan,desc
            });

            await adduser.save();
            res.status(200).json(adduser);
        }
    }
    catch(error)
    {
        res.status(404).json(error);
    }

})




/***************************************************************************/


/****************************Add New Agency*********************************/

router.post("/govtaddagency",async(req,res)=>{
    //console.log(req.body);

    const {agencyname,username,password} = req.body;

    if(!agencyname||!username||!password)
    {
        res.status(404).json("Please fill all the fields")
    }

    try
    {
        const preuser = await agencyofficials.findOne({agencyname:agencyname});
        if(preuser)
        {
            res.status(404).json("This Agency is already registered!!")
        }
        else
        {
            const adduser = new agencyofficials({
                agencyname,username,password
            });

            await adduser.save();
            res.status(200).json(adduser);
        }
    }
    catch(error)
    {
        res.status(404).json(error);
    }

})

router.get("/showdetails/:id",async(req,res)=>{
  try
  {
      const {id} = req.params;
      const userindividual = await agencyforms.findById({_id:id});
      res.status(200).json(userindividual);
  }
  catch(error)
  {
      res.status(404).json(error);
  }
})

/***************************User Dashboard********************************/



/*************************************************************************/


/*************************************************************************/


/*****************************Agency Login********************************/

router.post("/agencylogin", async (req, res) => {
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


/*************************************************************************/

/*******************************Govt Login********************************/

router.post("/govtlogin", async (req, res) => {
    const { username, password } = req.body;
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     });
    const user = await govtofficials.findOne({ username });
    if (!user || user.password !== password) {
      res.status(403);
      res.json({
        message: "Invalid Login",
      });
      return;
    }
    res.status(200).json({message: "Official Logged in successfully"});
  });

/****************************************************************************/

/*************************Beneficiary SignUp/SignIn**************************/

router.post("/signup", async (req, res) => {
    const { udid, phone, password } = req.body;
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     });

    const ud = await users.findOne({ udid });
    if (ud) {
      res.status(500);
      res.json({
        message: "user already exists",
      });
      return;
    }
    
    const newUser = new users({udid,phone,password});
    await newUser.save(); 
    res.status(200).json({message: "User registered successfully"});
  });

router.post("/login", async (req, res) => {

    const { udid, password } = req.body;
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     });
    const user = await users.findOne({ udid });
    if (!user || user.password !== password) {
      res.status(404);
      res.json({
        message: "invalid login",
      });
      return;
    }
    res.status(200).json({message: "Logged in successfully"});
  });

/***************************************************************************/


router.get("/agencyapplications",async(req,res)=>{
    try
    {
        const userdata = await agencyforms.find();
        res.status(200).json(userdata);
    }
    catch(err){
        res.status(404).json(error);
    }
})


module.exports = router; 