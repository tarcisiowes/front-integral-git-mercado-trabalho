const express = require("express")
const user = require('./controllers/user')

const roteador = express()

roteador.get('/user/:id', user.getProfile)
roteador.get('/user', user.getAllProfiles)

module.exports = roteador