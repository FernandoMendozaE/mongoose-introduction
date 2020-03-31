const mongosse = require('mongoose')

/**
 * Conexión a la base de datos
 */
const uri = 'mongodb://127.0.0.1:27017/mywebstore'

mongosse
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }) // Configuración de conexión a la BD
  .catch(err => console.log(err))

// Eventos
const db = mongosse.connection
db.once('open', _ => {
  console.log(' Database is connected to', uri)
})

db.on('error', error => {
  console.log(error)
})
