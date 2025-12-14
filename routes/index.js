
const express = require('express')

const authroute = require('./auth')

const ShortnerRoute = require('./shortner')
const { redirecturl } = require('../controller/shorturlController')



const routerr =express.Router()

