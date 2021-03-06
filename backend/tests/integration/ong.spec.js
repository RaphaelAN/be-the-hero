const request = require('supertest')
const app = require('../../src/app')
const conenction = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach( async () => {
        await conenction.migrate.rollback()
        await conenction.migrate.latest()
    })

    afterAll(async () => {
        await conenction.destroy()
    })
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Nova ong",
                email: "contato@apad.com.br",
                whatsapp: "2100000000",
                city: "Rio de Janeiro",
                uf : "RJ"
            })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})