import '../App.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {
    ListItem,
    List,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    Divider,
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Android } from '@mui/icons-material'

const MessageList = () => {
    const allMessages = useSelector((state) => state.messages.messageList)
    let { chatId } = useParams()
    const { name } = useSelector((state) => state.profile)

    if (!allMessages[chatId]) return null
    const messages = allMessages[chatId].messages

    const isAuthorBot = (authtor) => {
        return authtor === 'BOT'
    }

    return (
        <>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                {allMessages[chatId].map((element) => {
                    return (
                        <div key={element.id}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar>
                                        {isAuthorBot(element.author) ? (
                                            <Android />
                                        ) : (
                                            <AccountCircleIcon />
                                        )}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        isAuthorBot(element.author)
                                            ? 'BOT'
                                            : name
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {element.text}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    )
                })}
            </List>
        </>
    )
}

export default MessageList
