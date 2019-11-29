const { factory } = require('factory-girl')
const { Charge } = require('../src/app/models')
const faker = require('faker')

faker.locale ='pt_BR'
factory.define('Charge', Charge, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    product_service_description: faker.name.jobTitle(),
    product_service_price: faker.finance.amount(),
    installment_plan: faker.random.number({min: 1, max: 15}),
    due_date: faker.date.future(),

})

module.exports = factory