const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/lost', authRoutes)

module.exports = server
