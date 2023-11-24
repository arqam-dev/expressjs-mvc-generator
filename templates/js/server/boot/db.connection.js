const Credentials = require('../config/db.credentials.json');
const Sequelize = require('sequelize');

const credentials = Credentials.development;

/* for MySQL */
// Note: Replace credentials with your credentials

const Db = new Sequelize(credentials.database, credentials.user, credentials.password, {
  host: credentials.host,
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = Db;