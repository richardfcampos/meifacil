'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('charges', {
        id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
        },
        name:{
        type: Sequelize.STRING,
        allowNull: false,
        },
        email:{
        type: Sequelize.STRING,
        allowNull: false,
        },
        product_service_description:{
        type: Sequelize.STRING,
        allowNull: false,
        },
        product_service_price:{
         type: Sequelize.FLOAT,
         allowNull: false,
        },
        installment_plan:{
         type: Sequelize.INTEGER,
         allowNull: false
        },
        due_date:{
         type:Sequelize.DATE,
         allowNull: false
        }
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('charges');
  }
};
