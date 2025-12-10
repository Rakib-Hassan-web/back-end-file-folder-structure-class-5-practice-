


const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const ShortnerSchema = new Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },

    visitHistory :[
        { 

            type: Date,
            default: Date.now()
        }
    ]
}, { timestamps: true });


 module.exports = mongoose.model ('shortner',ShortnerSchema)