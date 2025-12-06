const UserSchema = require("../models/UserSchema")




const registration =  async( req,res )=>{


  const { name,email,password } = req.body



        const existinguser =  await UserSchema.findOne({email})
        if(existinguser) return res.status(400).send(' manush ache aida dia ' )

  const newuser = new UserSchema({
      name,email,password
    })
    
      await newuser.save()

  
  
    


    res.status(200).send(' reg done ' )}




const login = ( req,res )=>{

    res.send(' login')
}


module.exports= { registration, login}