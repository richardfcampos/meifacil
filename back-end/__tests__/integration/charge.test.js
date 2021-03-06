const request = require('supertest')

const app = require('../../src/app')
const factory = require('../factories')
const trucate = require('../utils/truncate')
const faker = require('faker')

describe("Charge", () => {

    beforeEach(async () => {
        await trucate()
    })
    it("should have founded saved charge", async () => {
        const charge = await factory.create('Charge' )

        const response = await request(app)
            .get(`/charge`)
            .query({
                id: charge.dataValues.id
            })
        expect(response.status).toBe(200)

    })

    it("should save charge", async () => {

        const response = await request(app)
            .post('/charge')
            .send(
                {
                    name: faker.name.findName(),
                    email: faker.internet.email(),
                    product_service_description: faker.name.jobTitle(),
                    product_service_price: faker.finance.amount(),
                    installment_plan: faker.random.number({min: 1, max: 15}),
                    due_date: faker.date.future(),

                }
            )

        expect(response.status).toBe(200)
    })

    it("Should not save, doesn't have valid data", async () => {

        const data = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            product_service_description: faker.name.jobTitle(),
            product_service_price: faker.finance.amount(),
            installment_plan: faker.random.number({min: 1, max: 15}),
            due_date: faker.date.future(),
        }

        const getRandomProperty = (data) => {
            const keys = Object.keys(data)
            return data[keys[ keys.length * Math.random() << 0]];
        }
        const getKeyByValue = (object, value) => {
            return Object.keys(object).find(key => object[key] === value);
        }
        const ramdomValue = getRandomProperty(data)
        const randomProperty = getKeyByValue(data,ramdomValue)
        delete data[randomProperty]
        console.log(data)

        const response = await request(app)
            .post('/charge')
            .send(data)

        expect(response.status).toBe(422)

    })

    it("should not get charge, no ID", async () => {

        const response = await request(app)
            .get(`/charge`)

        expect(response.status).toBe(401)

    })

})