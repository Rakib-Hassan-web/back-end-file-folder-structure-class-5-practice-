
const express = require('express')

const authroute = require('./auth')

const ShortnerRoute = require('./shortner')
const { redirecturl } = require('../controller/shorturlController')



const routerr =express.Router()


// routerr.get('/', (req, res) => {
//   res.send('Hello World!')
// })



routerr.use('/auth', authroute)

routerr.use('/shortner', ShortnerRoute)


routerr.use('/:id', redirecturl)






module.exports = routerr