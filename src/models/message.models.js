const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Messages = db.define('messages', { 
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    senderId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'sender_id'
    },
    consersationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'conversation_id'
    },
    messages: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Messages