require('./connection')

const User = require('./models/User')

const createUsers = async () => {
  const userOne = new User({
    username: 'donna',
    password: '12345'
  })
  await userOne.save()

  const userTwo = new User({
    username: 'cameron',
    password: '12345'
  })
  await userTwo.save()
}

createUsers()
