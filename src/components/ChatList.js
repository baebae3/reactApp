import * as React from 'react'
import { useState } from 'react'
import { Button, DialogTitle, TextField } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import FolderIcon from '@mui/icons-material/Folder'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from '@mui/material'
import { addChat, deleteChat } from '../store/chats/action'

const ChatList = ({ addMessage }) => {
    const chats = useSelector((state) => state.chats)
    const [chatName, setChatName] = useState('')
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()

    const handleChatName = (e) => {
        setChatName(e.target.value)
    }

    const handleAdd = () => {
        setVisible(true)
    }

    const handleDelete = (chatItem) => {
        dispatch(deleteChat(chatItem))
    }

    const handleClose = () => {
        setVisible(false)
    }

    const handleSave = () => {
        dispatch(addChat(chatName))
        handleClose()
        setChatName('')
    }
    return (
        <>
            <List style={{ padding: '0px' }}>
                {chats?.chatList.length > 0 ? (
                    chats.chatList.map((chat, index) => (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <IconButton
                                    onClick={() => handleDelete(chat.id)}
                                    edge="end"
                                    aria-label="delete"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <Button>delete</Button>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <Link to={`/chats/${chat.id}`} key={chat.id}>
                                <ListItemText primary={chat.name} />
                            </Link>
                        </ListItem>
                    ))
                ) : (
                    <div>No chats</div>
                )}
            </List>
            <div className="ChatListPosition">
                <Button onClick={handleAdd}>Add chat</Button>
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Enter name</DialogTitle>
                    <TextField value={chatName} onChange={handleChatName} />
                    <Button onClick={handleSave}>Save</Button>
                </Dialog>
            </div>
        </>
    )
}

export default ChatList
