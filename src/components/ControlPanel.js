import { TextField, Fab } from '@mui/material'
import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'
import { useDispatch, useSelector } from 'react-redux'
import {
    addMessageWithThunk,
    addMessage,
    addMessageWithSaga,
} from '../store/messages/action'

const ControlPanel = () => {
    const allMessages = useSelector((state) => state.messages.messageList)
    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('')
    const authorName = useSelector((state) => state.profile.name)
    const inputRef = useRef(null)
    let { chatId } = useParams()

    const messages = allMessages[chatId] || []

    const handleChanger = (event) => {
        setInputText(event.target.value)
    }

    const handleAdd = (event) => {
        let templateObj = {
            text: inputText,
            author: authorName,
        }
        dispatch(addMessageWithThunk(chatId, templateObj))
        setInputText('')
        inputRef.current.focus()
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAdd()
            console.log(messages[messages.lenght - 1].author)
        }
    }

    return (
        <>
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
