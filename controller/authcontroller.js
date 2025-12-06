const UserSchema = require("../models/UserSchema")




const registration =  async( req,res )=>{


  const { name,email,password } = req.body


   


  const newuser = new UserSchema({
      name,email,password
    })
    
      await newuser.save()

  
  const existinguser =  await UserSchema.findOne({email})
  if(existinguser) res.send(' manush ache aida dia ' )
  
    


    res.send(' reg done ' )}




const login = ( req,res )=>{

    res.send(' login')
}


module.exports= { registration, login}