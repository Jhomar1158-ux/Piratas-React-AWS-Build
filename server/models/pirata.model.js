const mongoose = require("mongoose");

const EsquemaPirata = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre de Pirata es obligatorio."],
        unique: [true, "El pirata ya está registrado."]
    },
    imagen: {
        type: String,
        required: [true, "La foto del Pirata es obligatorio."],
    },
    tesoros:{
        type: String,
        required: [true, "La cantidad de tesoros del Pirata es obligatorio."],
    },
    phrase:{
        type: String,
        required: [true, "No hay Pirata sin frase"],
    },
    position:{
        type: String,
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type:Boolean,
        default: true
    }
}, {timestamps: true, versionKey: false})
// timestamps: True -> Nos genera el created at y updated at

// autores -> Nombre de la colección
const Pirata = mongoose.model("piratas", EsquemaPirata);
module.exports = Pirata;