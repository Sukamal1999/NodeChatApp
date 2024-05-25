const mongoose = require('mongoose');

mongoose.Schema({

    name: {
        type:String,
        required:true
    },

    iamge: {
        type:String,
        required:true
    },
    
    password: {
        type:String,
        required:true
    },
    
    email: {
        type:String,
        required:true
    },
    
    is_online: {
        type:String,
        default:0
    },
    
});