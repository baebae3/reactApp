import { ADD_CHAT, DELETE_CHAT } from './action'

const inititalState = {
    chatList: [],
}

const chatsReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        name: action.payload,
                        id: `id${state.chatList.length}`,
                    },
                ],
            }
        case DELETE_CHAT:
            const chatId = action.payload
            return {
                ...state,
                chatList: [...state.chatList.filter((e) => e.chatId !== e.id)],
            }
        default:
            return state
    }
}

export default chatsReducer
