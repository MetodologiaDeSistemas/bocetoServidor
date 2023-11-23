// Aqui se definiran las rutas 
// esto quiere decir que en este componente vamos a creat las distintas peticiones
// al servidor: (get/Post/Put/Delete) 
// estos los utilizaremos en conjunto con los modelos creados en las otras carpetas 
// en cada uno de los EndPoint (funciones de peticion)

const { Router } = require('express');
const path = require('path');
const { unlink } = require('fs-extra');
const router = Router();

// Models
const Image = require('../models/Imagenes');
const { log } = require('console');


router.get('/upload', (req, res) => {
    Image
    .find()
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message : error})
    })
});

router.post('/upload', async (req, res) => {
    const image = new Image();
    image.filename = req.file.filename;
    image.path = '/Uploads/' + req.file.filename;
    image.mimetype = req.file.mimetype;
    await image.save();
    res.send('Guardado')
});

router.get('/upload/:id', (req, res) => {
    const {id} = req.params;
    Image
    .findById(id)
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message : error})
    })
});

router.delete('/upload/:id', async (req, res) => {
    const {id} = req.params;
    Image
    .deleteOne({_id:id})
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>{
        res.json({message : error})
    })
});

module.exports = router;