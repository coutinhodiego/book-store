const mongoose = require('mongoose')

const produtoSchema = mongoose.model('books-produto',
  {
    name : {type: String, required: true},
    price : {type: Number, required: true},
    sinopse: {type: String, required: true},
    image: {type: Buffer, data: Buffer, contentType: String},
    imgName: {type: String},
    urlImage: {type: String}

  }
)

module.exports = produtoSchema;