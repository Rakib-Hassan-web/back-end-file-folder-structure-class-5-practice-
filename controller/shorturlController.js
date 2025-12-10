const { isvalidUrl } = require("../utils/validations")









const shortnerurl = async (req, res) => {

    const {longUrl} = req.body

    if(!longUrl) return res.status(400).send('longUrl is required')
if(!isvalidUrl(longUrl)) return res.status(400).send('Invalid URL')










}


module.exports = {
    shortnerurl,
    
}