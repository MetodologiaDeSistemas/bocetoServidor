const mongoose = require("mongoose");


const Precio_Shema = mongoose.Schema({
    Manicura_trad:{
        type: Number
    },
    Esmaltado_sem_per:{
        type: Number
    },
    Retiro_esmalte:{
        type: Number
    },
    Cejas:{
        type: Number
    },
    Depilacion_def:{
        type: Number
    }
});

module.exports=mongoose.model('precio', Precio_Shema)