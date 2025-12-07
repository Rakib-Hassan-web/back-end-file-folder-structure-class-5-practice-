

const express = require('express')
const { registration, login } = require('../controller/authcontroller')


const routerr =express.Router()


// routerr.get('/', (req, res) => {
//   res.send('Hello World!')
// })



routerr.post('/registration', registration)

routerr.post('/login', login)



module.exports = routerr