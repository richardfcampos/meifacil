const app = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')
const { Charge } = require('./app/models')
const {
    chargeCreateValidatorCreate, validate } = require('./validator/chargeValidator')
const options = {}

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));


const ChargeController = require('../src/app/controller/ChargeController')

app.route('/charge')
    .get(ChargeController.getById)
    .post(chargeCreateValidatorCreate(), validate, ChargeController.store)

app.route('/charges')
    .get(ChargeController.getCharge)


module.exports = app