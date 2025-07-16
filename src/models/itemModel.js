const { DataTypes } = require('sequelize');
const sequelize = require('../db/db')

const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    price: {
        type: DataTypes.FLOAT,
        default: 0.00,
    },
    purchased: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Item;
