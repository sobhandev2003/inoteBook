// import mongoose, { model } from 'mongoose';
const mongoose =require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"user"
   },
 titale:{
    type: 'string',
    require:true,
    
 },
 description:{
    type: 'string',
    require:true,

 },
 tag:{
     type: 'string',
     default:"Genarel"
 },
 date:{
    type: Date,
    default: Date.now
 }
});
module.exports = mongoose.model('Notes', NotesSchema);