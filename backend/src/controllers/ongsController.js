const crypto = require('crypto')

const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },


    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body

        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id }) 
    }
}

/**
 * Metodos http: CRUD
 * 
 * GET: busca informacao do back-end. Roda assim que a rota e acessada
 * POST: cria informacao no back-end
 * PUT: Altera informcao no back-end
 * DELETE: Deleta informacao no back-end
 */


/**
 * Tipos de parametros:
 * 
 * Query: parametros nomeados enviados na rota apos o ? (filtros, paginacao)
 * Route: parametros para identificar recursos
 * Request Body: Corpo da requisicao utilizado para criar ou alterar recursos
 */
