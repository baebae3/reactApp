import { CHECK_BOX, TOGGLE_NAME, UPDATE_NAME } from './actions'

const inititalState = {
    showName: true,
    name: 'Maksim',
    agree: false,
    textPull: 'Нажми на меня',
    textPush: 'Спасибо что нажал',
}

const profileReducer = (state = inititalState, action) => {
    switch (action.type) {
        case CHECK_BOX:
            return {
                ...state,
                agree: !state.agree,
            }

        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            }

        case TOGGLE_NAME:
            return {
                ...state,
                showName: !state.showName,
            }

        default:
            return state
    }
}

export default profileReducer
