const router = require('express').Router()
const conversationServices = require('./conversations.services')
const messageService = require('../message/messages.services')
const passport = require('passport')
require('../middlewares/auth.middleware')(passport)

router.route('/')
        .get(passport.authenticate('jwt', { session: false }), conversationServices.getAllConversations)
        .post(passport.authenticate('jwt', { session: false }), messageService.createMessages)

router.route('/:conversation_id')
    .get(passport.authenticate('jwt', { session: false }), conversationServices.getConversationsById)
    .patch(passport.authenticate('jwt', { session: false }), conversationServices.patchConversation)
    .delete(passport.authenticate('jwt', { session: false }), conversationServices.deleteConcesation)

module.exports = router
