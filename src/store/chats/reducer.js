import { ADD_CHAT, DELETE_CHAT } from './action'

const inititalState = {
    chatList: [
        {
            name: 'test',
            id: `id01`,
        },
    ],
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
            // const chatId = action.payload
            return {
                ...state,
                chatList: [
                    ...state.chatList.filter(
                        (chatItem) => chatItem.id !== action.payload
                    ),
                ],
            }
        default:
            return state
    }
}

export default chatsReducer
