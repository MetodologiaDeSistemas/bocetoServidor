//Aqui se crea el modelo de datos que vamos a pasar a mongoDB 
// es decir que se crean todos los atributos de cada registro de la BD
// y luego lo exportamos para que se puedan usar en los otrod componentes

const mongoose = require("mongoose");
const hora_Schema = mongoose.Schema({
    hora_inicio_matutino:{
        type: String,
        required: true
    },
    hora_cierre_matutino:{
        type: String,
        required: true
    },
    hora_inicio_vespertino:{
        type: String,
        required: true
    },
    hora_cierre_vespertino:{
        type: String,
        required: true
    }
});
module.exports=mongoose.model('Horario', hora_Schema)