const express = require('express')

const routes = express.Router()

const ongController = require('./controllers/ongsController')

const incidentsController = require('./controllers/incidentController')

const profileController = require('./controllers/profileController')

const sessionController = require('./controllers/sessionController')

/* Session Controller */
routes.post('/sessions', sessionController.create)

/* Ongs routes */
routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

/* Profile Routes */
routes.get('/profile', profileController.index)

/* Incident Routes */
routes.get('/incidents', incidentsController.index)
routes.post('/incidents', incidentsController.create)
routes.delete('/incidents/:id', incidentsController.delete)




module.exports = routes