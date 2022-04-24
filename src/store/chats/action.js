export const ADD_CHAT = 'ADD_CHAT'
export const DELETE_CHAT = 'DELETE_CHAT'

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload: name,
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId,
})
