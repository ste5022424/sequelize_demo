const Sequelize = require('sequelize');
const sequelize = require('./database/sequelize/sequelize')
const User = require('./models/User')(sequelize, Sequelize);

// Find all users
User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
});