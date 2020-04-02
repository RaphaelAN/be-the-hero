const {celebrate, Segments, Joi} = require('celebrate')
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

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().length(10),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongController.create)

/* Profile Routes */
routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}) ,profileController.index)

/* Incident Routes */
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidentsController.index)

routes.post('/incidents', incidentsController.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentsController.delete)




module.exports = routes