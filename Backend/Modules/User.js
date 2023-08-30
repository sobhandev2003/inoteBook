const mongoose =require('mongoose');
// const model=require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
 name:{
    type: 'string',
    require:true,
    
 },
 mail:{
    type: 'string',
    require:true,
    unique:true,

 },
 pasword:{
    type: 'string',
    require:true,
    
 },
 date:{
    type: Date,
    default: Date.now
 }
});
const user=mongoose.model('user',UserSchema);
// user.createIndexes();
module.exports=user;