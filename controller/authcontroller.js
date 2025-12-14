const UserSchema = require("../models/UserSchema")
const jwt = require('jsonwebtoken');
const {
    isvalidEmail,
    isvalidpPasswprd
} = require("../utils/validations")




const registration = async (req, res) => {


    const {
        name,
        email,
        password
    } = req.body


    if (!name) return res.status(400).send('name is required')
    if (!email) return res.status(400).send('email is required')



    if (!isvalidEmail(email)) return res.status(400).send('Enter a valid email')

    if (!password) return res.status(400).send('password is required')


    if (!isvalidEmail(email)) return res.status(400).send('Enter a valid email')

    if (!isvalidpPasswprd(password)) return res.status(400).send('Enter a valid password')


    const existinguser = await UserSchema.findOne({
        email
    })
    if (existinguser) return res.status(400).send(' User already exist ')

    const newuser = new UserSchema({
        name,
        email,
        password
    })

    await newuser.save()






    res.status(200).send(' registration successful ')
}




const login = async (req, res) => {

    const {
        email,
        password
    } = req.body

    if (!email) return res.status(400).send('email is required')
    if (!password) return res.status(400).send('password is required')

    const exisuser = await UserSchema.findOne({
        email
    })


    if (!exisuser) return res.status(400).send('user not exist')


    const ismatch = await exisuser.comparePassword(password);

    if (!ismatch) return res.status(400).send('password is incorrect')



var token = jwt.sign({ id: exisuser._id , email: exisuser.email }, process.env.JWT_SEC);

console.log(token)

 res.cookie("Token" , token)

    res.status(200).send({
        success: "user login done",
        exisuser,

        Token :token
        
    })




}


module.exports = {
    registration,
    login
}