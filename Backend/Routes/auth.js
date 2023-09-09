const express=require('express');
// const user=require('../Modules/User');
const User=require('../Modules/User');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY="ASDFGhjKL";
const fetchuser=require('../midileware/fetchuser');
const router=express.Router();
const { body, validationResult } = require('express-validator');
// const { Route } = require('react-router-dom/cjs/react-router-dom.min');
// Creat a new user 

router.post('/creatUser',[
  body('name',"Enter the name atlest 4 character").isLength({min:4}),
  body('mail',"Enter a valid mail").isEmail(),
  body('pasword',"password atlest 5 character long").isLength({min:5})
],async(req, res) => {
  let suces=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({"suces":suces, errors: errors.array() });
  }

try{
  
let user=await User.findOne({mail:req.body.mail});
if (user) {
  return res.status(404).json({"suces":suces, errors: "this email allready exists."});
}
const salt =await bcrypt.genSaltSync(10);
  const sec_password = await bcrypt.hash(req.body.pasword,salt);
 user=await User.create({
    name: req.body.name,
    mail: req.body.mail,
    pasword: sec_password,
    
  })
  const data={
    user:{
      id:user.id,
    }
  }
  const authentoken= jwt.sign(data,JWT_SECRET_KEY);
  suces=true;
  res.json({"suces":suces,authentoken});
  // res.json({"message":"successfully created your acount."});
}
catch(err)
{ 
  console.log(err);
  res.status(500).send({"suces":suces,"message":"some error acour"});
}
  
});
// Login a user
router.post('/login',[
 
  body('mail',"Enter a valid mail").isEmail(),
  body('pasword',"pasword can't blank").exists()
],async(req, res) => {
  let suces=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {mail, pasword}=req.body;
  try{
  const user=await User.findOne({mail:mail});
  // console.log(user);
  if(!user){
    return res.status(404).sen({"suces":suces,"message":"This mail not exist"});
  }
  const password_compaier=await bcrypt.compare(pasword,user.pasword);
  // console.log(password_compaier);
  if(!password_compaier){
    return res.status(404).sen("Wrong password");
  }
  const data={
    user:{
      id:user.id,
    }
  }
  const authentoken= jwt.sign(data,JWT_SECRET_KEY);
  suces=true;
  res.json({"suces":suces,authentoken});

}
catch(err){
  console.log(err);
  res.status(500).send({ "suces":suces, "message":"some error acour"});
}
});
//Get user
router.post('/getuser',fetchuser,async(req, res)=>{
  let suces=false;
  try{
const userId=req.user.id;
const userDetails=await User.findById(userId).select("-pasword");
res.send({"suces":suces,"userDetails":userDetails});
  }
  catch(err){
    console.log(err);
    res.status(500).send({"suces":suces,"message":"some error acour"});
  }
})


module.exports=router;