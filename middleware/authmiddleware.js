


const  authmiddleware = ( req,res,next)=>{
    const token = req.cookies.Token
const verifytoken =jwt.verify (token , process.env.JWT_SEC)

    console.log("token " , verifytoken)
}