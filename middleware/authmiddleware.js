
const jwt = require('jsonwebtoken');


const  authmiddleware = ( req,res,next)=>{
    const token = req.cookies.Token
 
   console.log(token);
   

   next()
   
    // console.log("token " , verifytoken)
}


module.exports ={authmiddleware}