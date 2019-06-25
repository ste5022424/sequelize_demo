const Sequelize = require('sequelize');
const sequelize = require('./database/sequelize/sequelize')
const User = require('./models/User')(sequelize, Sequelize);

// Find all users
User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
});

// Insert
User.create({
    Name: 'Tom',
    Telephone: '09097895541s',
    Age: '20'
}).then(the => {
    console.log(`Insert OK >> ID:${the.ID}`);
});

// Delete
User.destroy({
    where: {
        Name: "Tom"
    }
}).then(() => {
    console.log(`Delete Tom Done`);
});

// Update
User.update({ Name: "WuWu" }, {
    where: {
        Name: "Wu"
    }
}).then(() => {
    console.log("Update Wu Done");
});