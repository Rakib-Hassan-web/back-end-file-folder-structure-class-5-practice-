const express = require('express')
const dbconnect = require('./dbConfig')
const UserSchema = require('./models/UserSchema')
const app = express()

app.use(express.json())

dbconnect()
UserSchema()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(4000, () => {
  console.log(`server running on port 4000`)
})

