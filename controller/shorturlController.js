const shortnerSchema = require("../models/shortnerSchema")
const { isvalidUrl } = require("../utils/validations")



const randomstring =(length =5)=>{
    randorstr =""
    const caracters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    for( let i= 0 ; i< length ; i++){
        const randomNum= Math.floor(Math.random() * caracters.length)
        randorstr +=caracters[randomNum]
    }

    return randorstr

}






const shortnerurl = async (req, res) => {

    const {longUrl} = req.body

    if(!longUrl) return res.status(400).send('longUrl is required')
if(!isvalidUrl(longUrl)) return res.status(400).send('Invalid URL')



const shortUrl =randomstring()

const urldata = new shortnerSchema({
    longUrl,shortUrl,

})

urldata.save()


res.status(201).send(urldata)






}


const redirecturl = async( req,res)=>{

    const params = req.params

    if(!params.id) return res.send('shorturl is required')

        const shorturldata = await shortnerSchema.findOne({ shortUrl:params.id})

        res.redirect(shorturldata.longUrl)

}

