const Messages = require('../models/message.models')

const getAllMessages =  async () => {
    const data = await Messages.findAll()
    return data
}

const getMessagesById = async (id) => {
    const data = await Messages.findOne({
        where: {
            id
        }
    })
    return data
}

const createMessages = async (data) => {
    const newMessages = await Messages.create({
        senderId: data.senderId,
        conversationId: data.conversationId,
        message: data.message
    })
    return newMessages
}

const updatedMessages = async (id, data) => {
    const result = await Messages.update(data,{
        where: {
            id
        }
    })
    return result
}

const deletedMessages = async (id) => {
    const data = await Messages.destroy({
        where: {
            id
        }
    })
}

module.exports = {
    getAllMessages,
    getMessagesById,
    createMessages,
    updatedMessages,
    deletedMessages
}