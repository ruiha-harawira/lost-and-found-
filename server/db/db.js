const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getLostPets(db = connection) {
  return db('lost').select()
}

function addALostPet(newLostPet, db = connection) {
  return db('lost').insert(newLostPet)
}

module.exports = {
  getLostPets,
  addALostPet,
}