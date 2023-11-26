
const express = require('express');
const router = express.Router();
const fecha_dep = require("../Models/Fecha_Depilacion");

// // Crear
// router.post("/fecha_dep", async (req, res) => {
//     try {
//         const f_d = new fecha_dep(req.body);
//         const data = await f_d.save();
//         res.json(data);
//     } catch (error) {
//         res.json({ message: error });
//     }
// });

// // Obtener todos
// router.get("/fecha_dep", async (req, res) => {
//     try {
//         const data = await fecha_dep.find();
//         res.json(data);
//     } catch (error) {
//         res.json({ message: error });
//     }
// });

// Obtener uno solo
router.get("/fecha_dep/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await fecha_dep.findById(id);
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

// Actualizar
router.put("/fecha_dep/:id", async (req, res) => {
    const { id } = req.params;
    const {
        mes,
        dia
    } = req.body;
    try {
        const data = await fecha_dep.updateOne(
            { _id: id },
            {
                $set: {
                    mes,
                    dia
                },
            }
        );
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

// // Eliminar
// router.delete("/fecha_dep/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const data = await fecha_dep.deleteOne({ _id: id });
//         res.json(data);
//     } catch (error) {
//         res.json({ message: error });
//     }
// });

module.exports = router;
