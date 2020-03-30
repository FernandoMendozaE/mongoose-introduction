require('./connection')

const Product = require('./models/Product')

// Guardar Datos en BD
const product = new Product({
  name: 'laptop',
  description: 'lenovo thinkpad x1 carbon 6th generation',
  price: 1300.99
})

product.save((err, document) => {
  if (err) {
    console.log(err)
  } else {
    console.log(document)
  }
})

console.log(product)
