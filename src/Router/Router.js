import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Chats from '../Pages/Chats'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import '../App.css'
import { useState } from 'react'
import Gists from '../Pages/Gists'

const Router = () => {
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
                <li>
                    <Link to="/gists">Gists</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats/:chatId" element={<Chats />} />
                <Route path="/gists" element={<Gists />} />
                <Route path="*" element={<Chats />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
