// Aqui se definiran las rutas 
// esto quiere decir que en este componente vamos a creat las distintas peticiones
// al servidor: (get/Post/Put/Delete) 
// estos los utilizaremos en conjunto con los modelos creados en las otras carpetas 
// en cada uno de los EndPoint (funciones de peticion)

const express = require('express');
const router = express.Router();
const horarioSchema = require("../Models/Hora")



router.post("/hora", (req,res) =>{
    const hora = horarioSchema(req.body);
    hora
    .save()
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message : error})
    })
})

router.get("/hora", (req,res) =>{
    horarioSchema
    .find()
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message : error})
    })
})

module.exports = router;