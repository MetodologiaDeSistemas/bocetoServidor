const { Int32 } = require("bson");
const mongoose = require("mongoose");

const fecha_dep = mongoose.Schema({
    mes:{
        type: String,
        required: true
    },
    dia:{
        type: Number,
        required: true
    },
    
});
module.exports=mongoose.model('fecha_dep', fecha_dep)