const mongoose=require('mongoose');
const mongooseURI="mongodb://127.0.0.1:27017/inotebook";
// const server='127.0.0.1:27017';
// const database="inotebook";
const conectedToMongoose=()=>{
mongoose.set('strictQuery', true);
try{

    mongoose.connect(mongooseURI,()=>{
        console.log("Successfully conected to mongodb");
    });
}
catch (err){
    console.log("Error connecting to mongod");
}
}

// const conectedToMongoose=async()=>{
//     try{
//         await mongoose.connect(`mongodb://${server}/${database}`);
//         console.log("Successfully conected to mongodb");
//     }
//     catch(err){
//         console.log("Error connecting to mongod");
//     }
// }
module.exports=conectedToMongoose;