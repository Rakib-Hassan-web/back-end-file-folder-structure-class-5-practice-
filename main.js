const express = require('express')
const dbconnect = require('./dbConfig')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const UserSchema = require('./models/UserSchema')
const routerr = require('./routes')
const app = express()

app.use(express.json())
app.use(cookieParser())

dbconnect()
UserSchema()

app.use(routerr)


app.listen(4000, () => {
  console.log(`server running on port 4000`)
})

