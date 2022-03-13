module.exports = (sequelize, DataTypes)=>{
    const Buyers = sequelize.define('buyers',{
        name: DataTypes.STRING,
        contact: DataTypes.STRING,
        total: DataTypes.STRING,
        mark: DataTypes.STRING,
        shop: DataTypes.STRING,
        item: DataTypes.STRING
    },
    {
        createdAT: 'createdAt',
        updatedAt: 'updatedAt'
    })
    return Buyers;
}