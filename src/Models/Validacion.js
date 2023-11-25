const mongoose = require("mongoose");

const validacion_schema = mongoose.Schema({

    usuario:{type: String, require: true },
    password:{type: String, require: true}

})
module.exports=mongoose.model('Validacion', validacion_schema)