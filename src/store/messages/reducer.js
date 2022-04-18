import { ADD_MESSAGE } from './action'

const inititalState = {
    messageList: {},
}

const messagesReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const { chatId } = action.payload
            const message = action.payload.message
            const oldMessages = state.messageList[chatId] || []
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [chatId]: [
                        ...oldMessages,
                        {
                            ...message,
                            id: `${chatId}${oldMessages.length}`,
                        },
                    ],
                },
            }

        default:
            return state
    }
}

export default messagesReducer
