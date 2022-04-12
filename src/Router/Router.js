import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Chats from '../Pages/Chats'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import '../App.css'
import { useState } from 'react'

const initialChats = {
    id1: {
        id: 1,
        name: 'chat 1',
        messages: [{ text: 'Chats test', author: 'BOT' }],
    },
    id2: {
        id: 2,
        name: 'chat 2',
        messages: [
            { text: 'Hello', author: 'Maksim' },
            { text: 'Test Chats', author: 'Maksim' },
            { text: 'Something', author: 'Bot' },
        ],
    },
}

const Router = () => {
    const [chats, setChats] = useState(initialChats)

    const addMessage = (chatId, message) => {
        setChats({
            ...chats,
            [chatId]: {
                name: chats[chatId].name,
                messages: [...chats[chatId].messages, message],
            },
        })
    }
    return (
        <BrowserRouter>
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/chats">Chats</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                    path="/chats/:chatId"
                    element={<Chats chats={chats} addMessage={addMessage} />}
                />
                <Route path="*" element={<Chats chats={chats} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
