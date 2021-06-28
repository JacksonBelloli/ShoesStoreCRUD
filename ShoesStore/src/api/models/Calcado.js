const mongoose = require('../data')

var calcadoSchema = new mongoose.Schema({
    modelo : String,
    marca : String,
    tamanho : Number,
    quantidade : Number,    
}, {timestamps : true})

var Calcado = mongoose.model('Calcado', calcadoSchema)

module.exports = Calcado