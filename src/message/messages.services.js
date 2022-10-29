const messagesController = require('./messages.controllers')
const conversationsController = require('../conversations/conversations.controllers')

const getAllMessages = (req, res) => {
    messagesController.getAllMessages()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({msg: err.message})
        })
}

const getMessagesById = (req, res) => {
    const id = req.params.id
    messagesController.getMessagesById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({msg: err.message})
        })
}

const createMessages = (req, res) => {
    const message = req.body.message
    const userId = req.user.id
    const firstName = req.user
    if(!message) return res.status(400).json({msg: 'Favor de colocar un mensaje', message: 'String'})
    return res.status(200).json({messages: message, userId: userId, firstName: firstName})

}

module.exports = {
    getMessagesById,
    getMessagesById,
    createMessages
}