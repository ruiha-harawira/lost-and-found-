const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const lostPetsRoutes = require('./routes/lostPets')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1', authRoutes)
server.use('/api/lost', lostPetsRoutes)

module.exports = server
