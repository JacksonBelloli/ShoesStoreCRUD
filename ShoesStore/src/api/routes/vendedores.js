const express = require('express')
const router = express.Router()
const Vendedor = require('../models/Vendedor')

router.get('/', async (req, res) =>{
    const limit = parseInt(req.query.limit)
    var cpf = req.query.cpf || null
    if (cpf != null){
        var vendedor = await Vendedor.find().where({cpf: cpf}).limit(limit).skip(limit)
    } else {
        var vendedor = await Vendedor.find().limit(limit).skip(limit)
    } 
    return res.json(vendedor)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    var vendedor = await Vendedor.findById(id)
    if(!vendedor) return res.status(404).json({
        "erro" : "Vendedor não encontrado"
    }) 
    res.json(vendedor)
})

router.post('/', async (req, res) =>{
    const vendedor = new Vendedor(req.body)
    var resultado = await vendedor.save()
    return res.json(resultado)
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var vendedor = await Vendedor.findByIdAndDelete(id)
    if(!vendedor) return res.status(404).json({
        "erro" : "Vendedor não encontrado"
    }) 
    return res.json(vendedor)
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novoVendedor = req.body
    var vendedor = await Vendedor.findByIdAndUpdate(id, novoVendedor, {useFindAndModify : false, new : true})
    if(!vendedor) return res.status(404).json({
        "erro" : "Vendedor não encontrado"
    }) 
    return res.json(vendedor)
})

module.exports = router