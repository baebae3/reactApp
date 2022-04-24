import { takeLatest, put, delay } from 'redux-saga/effects'
import { addMessage, ADD_MESSAGE_WITH_SAGA } from './messages/action'

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.payload.chatId, action.payload.message))
    if (action.payload.message.author !== 'BOT') {
        const botMessage = {
            text: 'Я работаю, saga',
            author: 'BOT',
        }
        yield delay(2000)
        yield put(addMessage(action.payload.chatId, botMessage))
    }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga)
}

export default mySaga
