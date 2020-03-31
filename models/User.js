const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    unique: true, // dato único,
    required: true // dato requerido
  },
  password: String,
  date: {
    type: Date,
    default: new Date()
  }
})

module.exports = model('User', userSchema)
