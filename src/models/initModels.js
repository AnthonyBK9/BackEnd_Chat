const Users = require('./users.models')
const Messages = require('./message.models')
const Conversations = require('./conversations.models')
const Participants = require('./participants.models')

const initModels = () => {

    //* Users 1:M Messages
    Users.hasMany(Messages)
    Messages.belongsTo(Users)

    //* Conversations 1:M Messages
    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)

    //* Participants 1:M Users
    Users.hasMany(Participants)
    Participants.belongsTo(Users)

    //* Conversation 1:M Participants
    Conversations.hasMany(Participants)
    Participants.hasMany(Conversations)

}

module.exports = initModels