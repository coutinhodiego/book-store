const fs = require('fs')
const ProdutoSchema = require('../db/produtoSchema')

module.exports = {
  listarProdutos: (req, res) => {
    ProdutoSchema.find((err, produtos) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(produtos)
    })
  },
  cadastrar: (req, res) => {
    let produto = new ProdutoSchema(req.body)
    produto.save((err, produto) => {
      if (err) {
        return res.status(500).send(err)
      }
      res.status(201).send(produto)
    })
  },
  listarPorId: (req, res) => {
    ProdutoSchema.findById(req.params.id, (err, produto) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(produto)
    })
  },
  delete: (req, res) => {
    ProdutoSchema.findByIdAndRemove(req.params.id, (err, result) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(result)
    })
  },
  update: (req, res) => {
    ProdutoSchema.findByIdAndUpdate(req.params.id, req.body, (err, produto) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(produto)
    })
  }
}
