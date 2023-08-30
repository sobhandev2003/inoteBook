const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY="ASDFGhjKL";
const fetchuser=(req, res, next) =>{
    const token=req.header('Auth-token');
    if(!token) {
        res.status(401).send({error:"Invalid token"});
    }
    try{
const data=jwt.verify(token,JWT_SECRET_KEY);
req.user=data.user;
next();
    }
    catch(err){

   res.status(401).send({error:"Invalid token"});
    }
}
module.exports=fetchuser;
