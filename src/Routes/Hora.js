// Aqui se definiran las rutas 
// esto quiere decir que en este componente vamos a creat las distintas peticiones
// al servidor: (get/Post/Put/Delete) 
// estos los utilizaremos en conjunto con los modelos creados en las otras carpetas 
// en cada uno de los EndPoint (funciones de peticion)

const express = require('express');
const router = express.Router();
const horarioSchema = require("../Models/Hora");

// Crear
router.post("/hora", async (req, res) => {
    try {
        const hora = new horarioSchema(req.body);
        const data = await hora.save();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

// Obtener todos
router.get("/hora", async (req, res) => {
    try {
        const data = await horarioSchema.find();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

// Obtener uno solo
router.get("/hora/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await horarioSchema.findById(id);
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

// Actualizar
router.put("/hora/:id", async (req, res) => {
    const { id } = req.params;
    const {
        hora_Lunes,
        hora_Martes,
        hora_Miercoles,
        hora_Jueves,
        hora_Viernes,
    } = req.body;
    try {
        const data = await horarioSchema.updateOne(
            { _id: id },
            {
                $set: {
                    hora_Lunes,
                    hora_Martes,
                    hora_Miercoles,
                    hora_Jueves,
                    hora_Viernes,
                },
            }
        );
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

// Eliminar
router.delete("/hora/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await horarioSchema.deleteOne({ _id: id });
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;
