import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import profileReducer from './profile/reducer'
import chatsReducer from './chats/reducer'
import messagesReducer from './messages/reducer'
import middleware from '../middlewares/middleware'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
)

export const persistor = persistStore(store)

// sagaMiddleware.run(mySaga)

export default store
