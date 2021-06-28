const mongoose = require('../data')

var vendedorSchema = new mongoose.Schema({
    nome : String,
    codigo : Number,
    cpf : Number,
    endereco : String,
    cidade : String,
    estado : String,
    cep : Number
}, {timestamps : true})

var Vendedor = mongoose.model('Vendedor', vendedorSchema)

module.exports = Vendedor