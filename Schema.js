const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} = graphql;

const typeShop = new GraphQLObjectType({
    name: 'Shop',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        address: {type: GraphQLString},
        contact: {type: graphql.GraphQLFloat},
        email: {type: GraphQLString}
    })
})

const typeBuyer = new GraphQLObjectType({
    name: 'Buyer',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        contact: {type: graphql.GraphQLFloat},
        total: {type: graphql.GraphQLFloat},
        mark: {type: GraphQLBoolean},
        shop: {type: GraphQLInt},
        item: {type: GraphQLInt}
    })
})

const typeItem = new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        quantity: {type: GraphQLInt},
        price: {type: graphql.GraphQLFloat},
        discount: {type: graphql.GraphQLFloat},
        GST: {type: graphql.GraphQLFloat},
        totalItemAmount: {type: graphql.GraphQLFloat}
    })
})

const typeStatus = new GraphQLObjectType({
    name: 'Confirmation',
    fields: () => ({
        status: {type: GraphQLString}
    })
})

var Database = require('./Index');
const shops = Database.shops;
const buyers = Database.buyers;
const items = Database.items;

const RootQuery = new GraphQLObjectType({
    name: "Query",
    fields: {
        shopsDetails:{
            type: new GraphQLList(typeShop),
            resolve(parent, args){
                let data = shops.findAll();
                return data;
            }
        },
        buyersDetails:{
            type: new GraphQLList(typeBuyer),
            resolve(parent, args){
                let data = buyers.findAll();
                return data;
            }
        },
        itemsDetails:{
            type: new GraphQLList(typeItem),
            resolve(parent, args){
                let data = items.findAll();
                return data;
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addShop: {
            type: typeStatus,
            args: {
                id: {type: GraphQLInt},
                name: {type: GraphQLString},
                address: {type: GraphQLString},
                contact: {type: graphql.GraphQLFloat},
                email: {type: GraphQLString}
            },
            resolve(parent, args){
                shops.create({
                    id: args.id,
                    name: args.name,
                    address: args.address,
                    contact: args.contact,
                    email: args.email
                })
                return {
                    status: 'Data Added Successfully',
                }
            }
        },
        addBuyer: {
            type: typeStatus,
            args: {
                id: {type: GraphQLInt},
                name: {type: GraphQLString},
                contact: {type: graphql.GraphQLFloat},
                total: {type: graphql.GraphQLFloat},
                mark: {type: GraphQLBoolean},
                shop: {type: GraphQLInt},
                item: {type: GraphQLInt}
            },
            resolve(parent, args){
                buyers.create({
                    id: args.id,
                    name: args.name,
                    contact: args.contact,
                    total: args.total,
                    mark: args.mark,
                    shop: args.shop,
                    item: args.item
                })
                return {
                    status: 'Data Added Successfully',
                }
            }
        },
        addItem: {
            type: typeStatus,
            args: {
                id: {type: GraphQLInt},
                name: {type: GraphQLString},
                quantity: {type: GraphQLInt},
                price: {type: graphql.GraphQLFloat},
                discount: {type: graphql.GraphQLFloat},
                GST: {type: graphql.GraphQLFloat},
                totalItemAmount: {type: graphql.GraphQLFloat}
            },
            resolve(parent, args){
                items.create({
                    id: args.id,
                    name: args.name,
                    quantity: args.quantity,
                    price: args.price,
                    discount: args.discount,
                    GST: args.GST,
                    totalItemAmount: args.totalItemAmount
                })
                return {
                    status: 'Data Added Successfully',
                }
            }
        },
        updateShop:{
            type: typeStatus,
            args: {
                id: {type: GraphQLInt},
                name: {type: GraphQLString},
                address: {type: GraphQLString},
                contact: {type: graphql.GraphQLFloat},
                email: {type: GraphQLString}
            },
            resolve(parent, args){
                shops.update({
                    name: args.name,
                    address: args.address,
                    contact: args.contact,
                    email: args.email
                },
                {
                    where:{id: args.id}
                })
                return {
                    status: 'Updated Successfully',
                }
            }
        },
        updateBuyer:{
            type: typeStatus,
            args: {
                id: {type: GraphQLInt},
                name: {type: GraphQLString},
                contact: {type: graphql.GraphQLFloat},
                total: {type: graphql.GraphQLFloat},
                mark: {type: GraphQLBoolean},
                shop: {type: GraphQLInt},
                item: {type: GraphQLInt}
            },
            resolve(parent, args){
                buyers.update({
                    name: args.name,
                    contact: args.contact,
                    total: args.total,
                    mark: args.mark,
                    shop: args.shop,
                    item: args.item
                },
                {
                    where:{id: args.id}
                })
                return {
                    status: 'Updated Successfully',
                }
            }
        },
        updateItem:{
            type: typeStatus,
            args: {
                id: {type: GraphQLInt},
                name: {type: GraphQLString},
                quantity: {type: GraphQLInt},
                price: {type: graphql.GraphQLFloat},
                discount: {type: graphql.GraphQLFloat},
                GST: {type: graphql.GraphQLFloat},
                totalItemAmount: {type: graphql.GraphQLFloat}
            },
            resolve(parent, args){
                items.update({
                    name: args.name,
                    quantity: args.quantity,
                    price: args.price,
                    discount: args.discount,
                    GST: args.GST,
                    totalItemAmount: args.totalItemAmount
                },
                {
                    where:{id: args.id}
                })
                return {
                    status: 'Updated Successfully',
                }
            }
        },
        deleteShop:{
            type: typeStatus,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent, args){
                shops.destroy({
                    where: {id: args.id}
                })
                return {
                    status: 'Deleted Successfully',
                }
            }
        },
        deleteBuyer:{
            type: typeStatus,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent, args){
                buyers.destroy({
                    where: {id: args.id}
                })
                return {
                    status: 'Deleted Successfully',
                }
            }
        },
        deleteItem:{
            type: typeStatus,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent, args){
                items.destroy({
                    where: {id: args.id}
                })
                return {
                    status: 'Deleted Successfully',
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery, mutation:Mutation});