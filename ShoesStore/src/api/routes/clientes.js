const express = require('express')
const router = express.Router()
const Cliente = require('../models/Cliente')

router.get('/', async (req, res) =>{
    const limit = parseInt(req.query.limit) 
    var cidade = req.query.cidade || null
    if (cidade != null){
        var cliente = await Cliente.find().where({cidade: cidade}).limit(limit).skip(limit)
    } else {
        var cliente = await Cliente.find().limit(limit).skip(limit)
    } 
    return res.json(cliente)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    var cliente = await Cliente.findById(id)
    if(!cliente) return res.status(404).json({
        "erro" : "Cliente não encontrado"
    })
    res.json(cliente)
})

router.post('/', async (req, res) =>{
    const cliente = new Cliente(req.body)
    var resultado = await cliente.save()
    return res.json(resultado)
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var cliente = await Cliente.findByIdAndDelete(id)
    if(!cliente) return res.status(404).json({
        "erro" : "Cliente não encontrado"
    }) 
    return res.json(cliente)
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novoCliente = req.body
    var cliente = await Cliente.findByIdAndUpdate(id, novoCliente, {useFindAndModify : false, new : true})
    if(!cliente) return res.status(404).json({
        "erro" : "Cliente não encontrado"
    }) 
    return res.json(cliente)
})

module.exports = router