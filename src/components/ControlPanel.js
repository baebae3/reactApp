import { TextField, Fab } from '@mui/material'
import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'
import Message from '../components/Message'

const ControlPanel = ({ addMessage }) => {
    // const [messageList, setMessageList] = useState([{}])
    const [inputText, setInputText] = useState('')
    const inputRef = useRef(null)
    let { chatId } = useParams()

    const handleChanger = (event) => {
        setInputText(event.target.value)
    }

    const handleAdd = (event) => {
        let templateObj = {
            text: inputText,
            author: 'Maksim',
        }
        // if (!messageList[0].hasOwnProperty('text')) {
        //     setMessageList([templateObj])
        // } else {
        //     setMessageList([...messageList, templateObj])
        // }
        addMessage(chatId, templateObj)
        setInputText('')
        inputRef.current.focus()
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAdd()
        }
    }

    // useEffect(() => {
    //     const botObj = {
    //         author: 'BOT',
    //         text: 'Hello Maksim',
    //     }

    //     const botObjHow = {
    //         author: 'BOT',
    //         text: 'I am fine, and you?',
    //     }
    //     let lastMessage = messageList[messageList.length - 1]
    //     const id = setInterval(() => {
    //         if (lastMessage.author === 'Maksim') {
    //             setMessageList([...messageList, botObj])
    //             lastMessage = messageList[messageList.length - 1]
    //         }

    //         if (lastMessage.text === 'How are you?') {
    //             setMessageList([...messageList, botObjHow])
    //         }
    //     }, 1000)

    //     return () => {
    //         clearInterval(id)
    //     }
    // }, [messageList])

    return (
        <>
            {/* <div>
                {messageList.length !== 1 &&
                    messageList.map((element, index) => (
                        <Message key={index} text={element} />
                    ))}
            </div> */}
            <div className="sizing">
                <TextField
                    autoFocus={true}
                    inputRef={inputRef}
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
        </>
    )
}

export default ControlPanel
