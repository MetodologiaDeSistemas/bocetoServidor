//Aqui se crea el modelo de datos que vamos a pasar a mongoDB 
// es decir que se crean todos los atributos de cada registro de la BD
// y luego lo exportamos para que se puedan usar en los otrod componentes

const mongoose = require("mongoose");
const hora_Schema = mongoose.Schema({
    hora_Lunes:{
        type: String,
        required: true
    },
    hora_Martes:{
        type: String,
        required: true
    },
    hora_Miercoles:{
        type: String,
        required: true
    },
    hora_Jueves:{
        type: String,
        required: true
    },
    hora_Viernes:{
        type: String,
        required: true
    }
});
module.exports=mongoose.model('Horario', hora_Schema)