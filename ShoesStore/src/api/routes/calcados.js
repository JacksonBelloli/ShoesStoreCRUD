const express = require('express')
const router = express.Router()
const Calcado = require('../models/Calcado')

router.get('/', async (req, res) =>{
    var limit = parseInt(req.query.limit)
    var marca = req.query.marca || null
    if (marca != null){
        var calcado = await Calcado.find().where({marca: marca}).limit(limit).skip(limit)
    } else {
        var calcado = await Calcado.find().limit(limit).skip(limit)
    }
    return res.json(calcado)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    var calcado = await Calcado.findById(id)
    if(!calcado) return res.status(404).json({
        "erro" : "Calçado não encontrado"
    })
    res.json(calcado)
})

router.post('/', async (req, res) =>{
    const calcado = new Calcado(req.body)
    var resultado = await calcado.save()
    return res.json(resultado)
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var calcado = await Calcado.findByIdAndDelete(id)
    if(!calcado) return res.status(404).json({
        "erro" : "Calcado não encontrado"
    }) 
    return res.json(calcado)
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novoCalcado = req.body
    var calcado = await Calcado.findByIdAndUpdate(id, novoCalcado, {useFindAndModify : false, new : true})
    if(!calcado) return res.status(404).json({
        "erro" : "Calcado não encontrado"
    }) 
    return res.json(calcado)
})

module.exports = router