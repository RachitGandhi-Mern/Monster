const mongoose = require('mongoose')


function connectToDB (){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connect To DataBase")
    })
    .catch((err) => console.log(err , err.message));
}


module.exports = connectToDB