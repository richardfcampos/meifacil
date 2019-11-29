const request require('supertest')

const app = require('../../src/app')
const { Charge } = require('../../src/app/models')
describe("Teste", () => {
    it("should sum to numbers", async () => {
        const charge = await Charge.create({
            name: 'Richard Campos',
            email: 'richardfcampos@gmail.com',
            product_service_description: 'Desenvolvimento de sistemas',
            product_service_price: 5000,
            installment_plan: 5,
            due_date: 5,
        })
        expect(charge.email).toBe('richardfcampos@gmail.com')

    })
})