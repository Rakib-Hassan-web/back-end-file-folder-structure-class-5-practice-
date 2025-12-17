


const jwt = require("jsonwebtoken");

const generateAccTkn = (payload) => {
  return (req, res)=>{
     const token = jwt.sign(payload, process.env.JWT_SEC);

     res.cookie("Token" , token) 

     

   token;
  }
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SEC);
 console.log("decoded" , decoded);

  return decoded;
};

module.exports = { generateAccTkn, verifyToken };