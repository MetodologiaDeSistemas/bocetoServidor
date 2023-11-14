const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const useRoutes = require ("./Routes/Hora")
//Agegar Conexion
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api', useRoutes)


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
