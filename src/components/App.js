import '../App.css'
import Message from './Message'
import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import { Fab } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import ChatList from './ChatList'

function App(props) {
    const [arr, setMessageList] = useState([{ text: '', author: '' }])
    const [inputText, setInputText] = useState('')
    const [list, setList] = useState([{}])

    const handleChanger = (event) => {
        setInputText(event.target.value)
    }

    const handleAdd = (event) => {
        let templateObj = {
            text: inputText,
            author: 'Maksim: ',
        }
        setMessageList([...arr, templateObj])
        setInputText('')
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAdd()
        }
    }

    useEffect(() => {
        const botObj = {
            author: 'BOT: ',
            text: 'Hello Maksim',
        }

        const botChat = {
            name: 'BOT',
            id: 'Chat with BOT',
        }

        const botObjHow = {
            author: 'BOT: ',
            text: 'I am fine, and you?',
        }
        let end = arr[arr.length - 1]
        const id = setInterval(() => {
            if (end.author === 'Maksim: ') {
                setMessageList([...arr, botObj])
                end = arr[arr.length - 1]
            }

            if (end.text === 'How are you?') {
                setMessageList([...arr, botObjHow])
            }
        }, 1000)

        if (end.author === 'BOT: ') {
            setList([...list, botChat])
        }
        return () => {
            clearInterval(id)
        }
    }, [arr])

    return (
        <div className="App">
            <header className="App-header">
                <div className="Chat-position">
                    <h4>Список чатов</h4>
                    {list[list.length - 1].hasOwnProperty('name') && (
                        <ChatList
                            chatAuthor={list[list.length - 1].id}
                            chatLastAuthor={arr[arr.length - 1].author}
                            chatLastText={arr[arr.length - 1].text}
                        />
                    )}
                </div>
                <h4>список сообщений:</h4>
                {arr.map((element, index) => (
                    <Message key={index} text={element} />
                ))}
                <div className="sizing">
                    <TextField
                        autoFocus="true"
                        id="outlined-basic"
                        label="Message"
                        variant="outlined"
                        onChange={handleChanger}
                        value={inputText}
                        onKeyPress={handleKeyPress}
                    />
                    <Fab color="primary" aria-label="add" onClick={handleAdd}>
                        <SendIcon />
                    </Fab>
                </div>
            </header>
        </div>
    )
}

export default App
