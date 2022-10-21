const { DataTypes }  = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('conversations',{
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagenUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image_url'
        },
        createdBy: {
            type: DataTypes.UUID,
            allowNull: false,
            field: 'created_by'
        }
})

module.exports = Conversations