
const express = require('express')


const routerr =express.Router()


routerr.get('/', (req, res) => {
  res.send('Hello World!')
})



module.exports = routerr