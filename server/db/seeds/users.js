const { generateHash } = require('authenticare/server')

const replacePasswordWithHash = (user) => {
  const { username, email_address, contact_details } = user
  return generateHash(user.password).then((hash) => {
    return {
      username,
      email_address,
      contact_details,
      hash,
    }
  })
}

const fakeUserData = [
  {
    username: 'admin',
    password: 'Krang',
    email_address: 'hello@devacademy.co.nz',
    contact_details: 'Ring the bell ;)',
  },
  {
    username: 'Thanos',
    password: 'ThanosIsTheBest123',
    email_address: 'hello@devacademy.co.nz',
    contact_details: 'click fingers (preferably yellow infinity stone)',
  },
  {
    username: 'Eugene H. Krabs',
    password: 'MoneyMoneyMoney',
    email_address: 'hello@devacademy.co.nz',
    contact_details: 'The Krusty Krab',
  },
]

const fakeUsers = Promise.all(fakeUserData.map(replacePasswordWithHash))

exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() => fakeUsers)
    .then((users) => {
      return knex('users').insert(users)
    })
}
