const express = require('express')
const router = express.Router()
const controllerProdutos = require('../controllers/produtos')

router.get('/produtos', controllerProdutos.listarProdutos)
router.get('/produtos/:id', controllerProdutos.listarPorId)
router.post('/produtos', controllerProdutos.cadastrar)
router.delete('/produtos/:id', controllerProdutos.delete)
router.put('/produtos/:id', controllerProdutos.update)

module.exports = router;