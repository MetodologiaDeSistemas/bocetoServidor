//Aqui se crea el modelo de datos que vamos a pasar a mongoDB 
// es decir que se crean todos los atributos de cada registro de la BD
// y luego lo exportamos para que se puedan usar en los otrod componentes

const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    originalname: {type: String, require: true},
    mimetype: {type: String, require: true},
});

module.exports = model('Image', imageSchema);