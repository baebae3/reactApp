export const ADD_MESSAGE = 'MESAGES::ADD_MESSAGE'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message },
})
