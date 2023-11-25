const express = require('express');
const router = express.Router();
const precioSchema = require("../Models/Precios");

// Crear
router.post("/precio", async (req, res) => {
    try {
        const precio = new precioSchema(req.body);
        const data = await precio.save();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

// Obtener todos
router.get("/precio", async (req, res) => {
    try {
        const data = await precioSchema.find();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

// Obtener uno solo
// router.get("/precio/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const data = await precioSchema.findById(id);
//         res.json(data);
//     } catch (error) {
//         res.json({ message: error });
//     }
// });

// Actualizar
router.put("/precio/:id", async (req, res) => {
    const { id } = req.params;
    const {
        Manicura_trad,
        Esmaltado_sem_per,
        Retiro_esmalte,
        Cejas ,
        Depilacion_def
    } = req.body;
    try {
        const data = await precioSchema.updateOne(
            { _id: id },
            {
                $set: {
                    Manicura_trad,
                    Esmaltado_sem_per,
                    Retiro_esmalte,
                    Cejas ,
                    Depilacion_def
                },
            }
        );
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});
 
module.exports = router;