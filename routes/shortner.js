const express = require('express')
const { shortnerurl } = require('../controller/shorturlController')



const routerr =express.Router()


routerr.post ( "/create"  , shortnerurl)




module.exports = routerr