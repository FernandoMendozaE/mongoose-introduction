require('../connection')

const User = require('../models/User')

async function getUser() {
  const user = await User.findOne({ username: 'joe' }) // busca al usuario con el username=fazt
  console.log(user)
}

getUser()
