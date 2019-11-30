const { Charge } = require('../models')
const  ChargeService  = require('../services/ChargeService')


class ChargeController {
    async store(req, res) {
        const charge = await ChargeService.store(req, res)
        return charge
    }

    async getCharge(req, res) {
        const charge = await ChargeService.getCharges(req, res)
        return charge
    }

    async getById(req, res) {
        const charge = await ChargeService.getById(req, res)
    }
}

module.exports = new ChargeController()