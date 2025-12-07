

const isvalidEmail =(email)=>{

    const emailregex=/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

    return emailregex.test(email);

}




const isvalidpPasswprd =(password)=>{


const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordRegex.test(password);

}



module.exports ={ isvalidEmail , isvalidpPasswprd}