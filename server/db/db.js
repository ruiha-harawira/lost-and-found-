const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getLostPets(db = connection) {
  return db('lost')
    .join('users', 'lost.user_id','users.id')
    .select('lost.id AS id', 'name','species','photo','username','email_address','contact_details','users.id AS userId')
}

function addALostPet(newLostPet, db = connection) {
  return db('lost').insert(newLostPet)
}

module.exports = {
  getLostPets,
  addALostPet,
}