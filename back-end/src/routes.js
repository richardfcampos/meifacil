const routes = require('express').Router()
const { Charge } = require('./app/models')

Charge.create({
    name:'Richard Campos',
    email:'richardfcampos@gmail.com',
    product_service_description:'Desenvolvimento de sistemas',
    product_service_price:5000,
    installment_plan:5,
    due_date:5,
})

module.exports = routes