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

router.get('/', async (req, res) => {
    const images = await Image.find();
    res.render('../', { images });
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', async (req, res) => {
    const image = new Image();
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save();
    res.redirect('/');
});

router.get('/image/:id', async (req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    res.render('profile', { image });
});

router.get('/image/:id/delete', async (req, res) => {
    const { id } = req.params;
    const imageDeleted = await Image.findByIdAndDelete(id);
    await unlink(path.resolve('./src/public' + imageDeleted.path));
    res.redirect('/');
});

module.exports = router;