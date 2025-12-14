
const express = require('express')

const authroute = require('./auth')

const ShortnerRoute = require('./shortner')
const { redirecturl } = require('../controller/shorturlController')



const routerr =express.Router()


routerr.get('/', (req, res) => {
  res.send('Hello World!')
})



routerr.use('/auth', authroute)








module.exports = routerr