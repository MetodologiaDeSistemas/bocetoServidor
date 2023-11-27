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
const Image = require('../Models/Imagenes');


router.get('/upload', async (req, res) => {
    try {
        const data = await Image.find();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/upload/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const image = new Image();
        image.filename = req.file.filename;
        image.path = '/Uploads/' + req.file.filename;
        image.mimetype = req.file.mimetype;
        image.iden = id;
        await image.save();
        res.send('Guardado');
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/upload/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Image.findById(id);
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/upload/:id', async (req, res) => {
    const { id } = req.params;
    try { 
        const img = await Image.findByIdAndDelete({ _id: id });
        await unlink(path.resolve('./src' + img.path));
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;