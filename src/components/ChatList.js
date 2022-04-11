import { useParams } from 'react-router'
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
    let { chatId } = useParams()

    return (
        <div>
            <List>
                {Object.keys(chats).map((chat, index) => (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton
                                key={index}
                                edge="end"
                                aria-label="delete"
                                onClick={deleteChat}
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
        </div>
    )
}

export default ChatList
