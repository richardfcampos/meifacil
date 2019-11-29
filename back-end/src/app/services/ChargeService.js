const { Charge } = require('../models')

class ChargeService {
    async store(req, res){
        const charge = await Charge.create(req.body)
        if (!charge){
            return res.status(401).json({message: 'Não foi possível cobrança'})
        }
        return  res.json(
            charge
        )
    }

    async getCharge(req, res) {
        const charge = await Charge.findOne({where: req.query})
        if (!charge) {
            return res.status(401).json({message: 'Cobrança não encontrado'})
        }
        return  res.json(
            charge
        )
    }
}

module.exports = new ChargeService()