const sequelize = require('./Database');
const {Sequelize, DataTypes} = require('sequelize');
const Database = {}

Database.Sequelize = Sequelize;
Database.sequelize = sequelize;

Database.sequelize.sync({force:false})
.then(()=>{
    console.log('ok')
})

Database.shops = require('./Shops')(sequelize,DataTypes);
Database.buyers = require('./Buyers')(sequelize,DataTypes);
Database.items = require('./Items')(sequelize,DataTypes);

module.exports = Database;