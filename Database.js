const Sequelize = require('sequelize');
const sequelize = new Sequelize('invoice', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch(e=>{
    console.log('error'+e)
})

module.exports = sequelize;