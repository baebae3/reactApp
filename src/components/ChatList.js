import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import FolderIcon from '@mui/icons-material/Folder'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'

const ChatList = ({ chats, deleteChat }) => {
    console.log('')
    return (
        <List>
            {Object.keys(chats).map((chat, index) => (
                <ListItem
                    key={index}
                    secondaryAction={
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => deleteChat(chat)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <Link to={`/chats/${chat}`} key={index}>
                        <ListItemText primary={chats[chat].name} />
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default ChatList
