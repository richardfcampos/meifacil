module.exports = (sequelize, DataTypes) => {
    const Charge = sequelize.define('Charge', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        product_service_description: DataTypes.STRING,
        product_service_price: DataTypes.FLOAT,
        installment_plan: DataTypes.INTEGER,
        due_date: DataTypes.DATE

    })

    return Charge
}