

const mongoose = require('mongoose')

const dbconnect =()=>{
    return mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log(' DB Connected!'));

}

module.exports = dbconnect
