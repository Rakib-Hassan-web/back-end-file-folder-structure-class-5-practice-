
const express = require('express')
const { registration } = require('../controller/authcontroller')


const routerr =express.Router()


routerr.get('/', (req, res) => {
  res.send('Hello World!')
})



routerr.post('/registration', registration)




module.exports = routerr