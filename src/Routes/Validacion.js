const express = require('express');
const router = express.Router();
const validacionSchema = require("../Models/Validacion")



// Manejar el registro de usuarios
// router.post('/Validacion', async (req, res) => {
//   try {
//       const Val = new validacionSchema(req.body);
//       const data = await Val.save();
//       res.json(data);
//   } catch (error) {
//       res.json({ message: error });
//   }
// });
  
// Manejar el inicio de sesión
router.post("/Validacion", async (req, res) => {
  const { usuario, password } = req.body;
  try {
      const data = await validacionSchema.findOne({usuario, password});
      // res.json(data);
      if (data){
        res.json({success: true})
      }
      else{
        res.json({success: false})
      }  
  } catch (error) {
    res.json({ message: error });    
  }
});

 module.exports = router;