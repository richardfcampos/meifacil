module.exports = {
  "host": '127.0.0.1',
  "username": 'sa',
  "password": 'LAccount@@',
  "database": 'meifacil',
  "operatorsAliases": false,
  "logging": false,
  "define": {
    "timestamps": true,
    "underscored": true,
    "underscoredAll": true
  },
  "dialect": 'mssql',
  "dialectOptions": {
    "options": {
      "useUTC": false,
      "dateFirst": 1
    }
  }
}