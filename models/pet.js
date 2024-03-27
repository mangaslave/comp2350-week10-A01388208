const {Sequelize, DataTypes} = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);
const userModel = require('./web_user');
const typeModel = require('./type');
const petModel = sequelize.define('pet',
    {pet_id: {type: Sequelize.INTEGER, autoIncrement: true,
    primaryKey: true},
    name: {type: Sequelize.STRING, allowNull: false},
    web_user_id: {type: Sequelize.INTEGER, allowNull: false, 
        references: {
            model: userModel, // This is the model that the foreign key references
            key: 'web_user_id', // This is the column name of the referenced model that the foreign key column will match to
          }},
    pet_type_id: {type: Sequelize.INTEGER, allowNull: false, 
        references: {
            model: typeModel, // This is the model that the foreign key references
            key: 'pet_type_id', // This is the column name of the referenced model that the foreign key column will match to
        }
    },
    },
    {tableName: 'pet',
    timestamps: false,
    singular: 'pet',
    plural: 'pet'}
);

petModel.belongsTo(userModel , { as: 'owner', timestamps: false,
foreignKey: 'web_user_id'});
userModel.hasMany(petModel , { as: 'pets', timestamps: false,
foreignKey: 'web_user_id'});

module.exports = petModel;