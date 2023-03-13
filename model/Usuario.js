const mongoose = require('mongoose')

const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
    //id: String,
    nombre: String,
    edad: Number
}, { versionKey: false })

module.exports = mongoose.model("usuarios", usuarioSchema);