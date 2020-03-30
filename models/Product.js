const { Schema, model } = require('mongoose')

// Esquema de la BD
const productSchema = new Schema({
  name: {
    type: String
  },
  description: String,
  price: {
    type: Number,
    default: 0
  }
})

module.exports = model('Product', productSchema)
