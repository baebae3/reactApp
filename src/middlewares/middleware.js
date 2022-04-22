import { addMessage, ADD_MESSAGE } from '../store/messages/action'

const middleware = (store) => (next) => (action) => {
    if (
        action.type === ADD_MESSAGE &&
        action.payload.message.author !== 'BOT'
    ) {
        const newMessage = {
            text: 'Я работаю',
            author: 'BOT',
        }
        setTimeout(
            () => store.dispatch(addMessage(action.payload.chatId, newMessage)),
            2000
        )
    }

    return next(action)
}

export default middleware
