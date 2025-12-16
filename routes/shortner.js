const express = require('express')
const { shortnerurl } = require('../controller/shorturlController')
const { authmiddleware } = require('../middleware/authmiddleware')



const routerr =express.Router()


routerr.post ( "/create"  , authmiddleware , shortnerurl)




module.exports = routerr