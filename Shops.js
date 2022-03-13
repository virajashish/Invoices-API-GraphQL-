module.exports = (sequelize, DataTypes)=>{
    const Shops = sequelize.define('shops',{
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        contact: DataTypes.STRING,
        email: DataTypes.STRING
    },
    {
        createdAT: 'createdAt',
        updatedAt: 'updatedAt'
    })
    return Shops;
}