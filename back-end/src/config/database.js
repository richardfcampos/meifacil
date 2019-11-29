require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  "host": process.env.DB_HOST,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "operatorsAliases": 0,
  "logging": false,
  "define": {
    "timestamps": true,
    "underscored": true,
    "underscoredAll": true
  },
  "dialect": process.env.DB_DIALECT ||  'mssql',
  "storage": "./__tests__/database.sqlite",
  "dialectOptions": {
    "options": {
      "useUTC": false,
      "dateFirst": 1
    }
  }
}