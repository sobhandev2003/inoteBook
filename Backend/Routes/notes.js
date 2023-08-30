const express=require('express');
const router=express.Router();
const Note=require('../Modules/Notes');
const fetchuser=require('../midileware/fetchuser');
const { body, validationResult } = require('express-validator');
// Add all note loged in user;
router.post('/addnote',fetchuser,[
    body('titale',"titale lentgth must be greater than 3").isLength({min:3}),
    body('description',"description lentgth must be greater than 5").isLength({min:5}),
],async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   try{
    const {titale,description,tag}=req.body;
    const note=new Note({
        titale,description,tag,user:req.user.id
    })
    const saveNote=await note.save();
    res.json(saveNote);
   }
   catch(err){
    res.status(404).send("Internel server error");
   }
});


// Get notes loged in user
router.get('/getallnotes',fetchuser,async(req, res) => {
    try{
     const notes = await Note.find({user: req.user.id});
    res.json(notes);
    }
    catch(err){
     res.status(404).send("Internel server error");
    }
 });
 // Update notes loged in user
 router.put('/updetnotes/:id',fetchuser,async(req, res) => {
    try{
     const {titale,description,tag}=req.body;
     const newNote = {};
     if(titale){newNote.titale=titale};
     if(description){newNote.description=description};
     if(tag){newNote.tag=tag};
     let note=await Note.findById(req.params.id);
     if(!note){return res.status(404).send("Not found");}
     if(note.user.toString()!==req.user.id){return res.status(401).send("Not allowed");}
     note =await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
  res.json(note);
    }
    catch(err){
     res.status(404).send("Internel server error");
    }
 });
// Delete Note loged in user
router.delete('/deletnotes/:id',fetchuser,async(req, res) => {
    try{
     
     let note=await Note.findById(req.params.id);
     if(!note){return res.status(404).send("Not found");}
     if(note.user.toString()!==req.user.id){return res.status(401).send("Not allowed");}
     note =await Note.findByIdAndDelete(req.params.id);
  res.json({"Success": "not deleted",note});
    }
    catch(err){
     res.status(404).send("Internel server error");
    }
 });
module.exports=router;