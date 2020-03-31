require('../connection')

const Product = require('../models/Product')

async function main() {
  const products = await Product.find({ name: 'keyboard' }) // obtiene toda las consultas de la colección Product
  console.log(products)
}

main()
