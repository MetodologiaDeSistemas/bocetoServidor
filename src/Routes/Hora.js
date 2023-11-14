// Aqui se definiran las rutas 
// esto quiere decir que en este componente vamos a creat las distintas peticiones
// al servidor: (get/Post/Put/Delete) 
// estos los utilizaremos en conjunto con los modelos creados en las otras carpetas 
// en cada uno de los EndPoint (funciones de peticion)

const express = require('express');
const router = express.Router();
const horarioSchema = require("../Models/Hora")


//Crear
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
//Obtener todos
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
//Obtener uno solo
router.get("/hora/:id", (req,res) =>{
    const {id} = req.params;
    horarioSchema
    .findById(id)
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message : error})
    })
})
//Actualizar
router.put("/hora/:id", (req,res) =>{
    const {id} = req.params;
    const {hora_inicio_matutino, 
        hora_cierre_matutino,
        hora_inicio_vespertino,
        hora_cierre_vespertino} = req.body;
    horarioSchema
    .updateOne({_id:id},{
        $set:{
            hora_inicio_matutino, 
            hora_cierre_matutino,
            hora_inicio_vespertino,
            hora_cierre_vespertino
        }
    })
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message : error})
    })
})
//Eliminar
router.delete("/hora/:id", (req,res) =>{
    const {id} = req.params;
    horarioSchema
    .deleteOne({_id:id})
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message : error})
    })
})

module.exports = router;