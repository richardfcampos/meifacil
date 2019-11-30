const { Charge } = require('../models')

class ChargeService {
    async store(req, res){
        const charge = await Charge.create(req.body)
        return  res.json(
            charge
        )
    }

    async getCharges(req, res) {
        const charge = await Charge.findAll()

        return  res.json(
            charge
        )
    }

    async getById(req, res) {
        if (!req.query || !req.query.id){
            return res.status(401).json({message: 'Está faltando o ID'})
        }
        const charge = await Charge.findOne({ where: {id: req.query.id}})

        return  res.json(
            charge
        )
    }
}

module.exports = new ChargeService()