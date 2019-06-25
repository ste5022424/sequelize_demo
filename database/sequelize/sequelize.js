const Sequelize = require('sequelize');
const config = require('config');

module.exports = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});