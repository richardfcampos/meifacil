const { Charge } = require('../models')
const  ChargeService  = require('../services/ChargeService')


class ChargeController {
    async store(req, res) {
        const charge = await ChargeService.store(req, res)
        return charge
    }

    async getCharge(req, res) {
        const charge = await ChargeService.getCharge(req, res)
        return charge
    }
}

module.exports = new ChargeController()