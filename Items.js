module.exports = (sequelize, DataTypes)=>{
    const Items = sequelize.define('items',{
        name: DataTypes.STRING,
        quantity: DataTypes.STRING,
        price: DataTypes.STRING,
        discount: DataTypes.STRING,
        GST: DataTypes.STRING,
        totalItemAmount: DataTypes.STRING
    },
    {
        createdAT: 'createdAt',
        updatedAt: 'updatedAt'
    })
    return Items;
}