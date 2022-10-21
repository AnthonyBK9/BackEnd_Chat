const { DataTypes }  = require('sequelize')
const db = require('../utils/database')

const Participants = db.define('Participants',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    conversationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'conversation_id'
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id'
    }
})

module.exports = Participants