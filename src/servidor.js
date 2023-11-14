const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
//Agegar Conexion
const app = express();
const port = process.env.PORT || 9000;

//routes
app.get('/', (req, res) => {
    res.send("Bienvenido a mi API");
});

//Conexion MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('server listning on port ', port));
//Encargado chino