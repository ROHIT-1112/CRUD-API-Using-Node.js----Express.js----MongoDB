const mongoose = require('mongoose')

const userschema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:String,
        required:true,
        unique:true
    }
})

// exporting userschema
module.exports = mongoose.model('data',userschema)