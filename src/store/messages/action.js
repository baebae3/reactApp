export const ADD_MESSAGE = 'MESAGES::ADD_MESSAGE'
export const ADD_MESSAGE_WITH_SAGA = 'MESAGES::ADD_MESSAGE_WITH_SAGA'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message },
})

export const addMessageWithSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    payload: { chatId, message },
})

export const addMessageWithThunk =
    (chatId, message) => (dispatch, getState) => {
        dispatch(addMessage(chatId, message))

        if (message.author !== 'BOT') {
            const botMessage = {
                text: 'Я работаю, thunk',
                author: 'BOT',
            }
            setTimeout(() => dispatch(addMessage(chatId, botMessage)), 1000)
        }
    }
