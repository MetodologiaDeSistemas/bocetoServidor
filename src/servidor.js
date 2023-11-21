const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const useRoutes = require ("./Routes/Hora")
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid/v4');

//Agegar Conexion
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api', useRoutes)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'src/Uploads/Imagenes'),
    filename: (req, file, cb, filename) => {
        console.log(file);
        cb(null, uuid() + path.extname(file.originalname));
    }
}) 


//routes
app.get('/', (req, res) => {
    res.send("Bienvenido a mi API");
});
app.use(require('./Routes/Imagenes.js'));


//Conexion MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listning on port ', port));
