const express = require('express')
const router = express.Router()
const vendedores = require('./vendedores')
const clientes = require('./clientes')
const calcados = require('./calcados')

router.use(express.json())
router.use('/vendedores', vendedores)
router.use('/clientes', clientes)
router.use('/calcados', calcados)

module.exports = router