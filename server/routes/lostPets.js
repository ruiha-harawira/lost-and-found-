const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getLostPets()
    .then((lostPets) => {
      res.json(lostPets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newLostPet = req.body
  newLostPet.user_id = newLostPet.userId
  delete newLostPet.userId
  db.addALostPet(newLostPet)
    .then(([id]) => {
      res.json({ ...newLostPet, id })
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router