const { verifyToken } = require('../utils/authontication');

const authmiddleware = (req, res, next) => {
  try {

    

    const token = req.cookies.Token; 
    // if (!token) {
    //   return res.status(401).json({ message: "No token found" });
    // }

     
    

    // req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { authmiddleware };
