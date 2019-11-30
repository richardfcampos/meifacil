const { body, validationResult } = require('express-validator')
const chargeCreateValidatorCreate = () => {
    return [
        body('name').exists().isString().withMessage('Falta Preencher o nome'),
        body('email').exists().isEmail().withMessage('Falta Preencher o email'),
        body('product_service_description').exists().isString()
            .withMessage('Falta Preencher a descrição do serviço ou produto'),
        body('product_service_price').exists().isNumeric()
            .withMessage('Falta Preencher a descrição do serviço ou produto'),
        body('installment_plan').exists().isInt({min: 1, max:15})
            .withMessage('Falta Preencher uma parcela correta'),
        body('due_date').exists().withMessage('Falta Preencher a data de validade'),
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}

module.exports = {
    chargeCreateValidatorCreate,
    validate,
}