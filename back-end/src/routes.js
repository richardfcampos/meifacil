const app = require('express').Router()
const { Charge } = require('./app/models')
const {chargeCreateValidatorCreate, validate } = require('./validator/chargeValidator')

const ChargeController = require('../src/app/controller/ChargeController')

app.route('/charge')
    .get(ChargeController.getCharge)
    .post(chargeCreateValidatorCreate(), validate, ChargeController.store)

module.exports = app