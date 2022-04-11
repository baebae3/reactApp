import '../App.css'
import { useParams } from 'react-router'

const MessageList = ({ chats }) => {
    let { chatId } = useParams()
    if (!chats[chatId]) return null
    const messages = chats[chatId].messages

    return (
        <div>
            {messages.map((element, index) => {
                return (
                    <div className="blockPosition">
                        <div className="message-style" key={index}>
                            <h3>{element.author}</h3>
                            <div className="position">{element.text}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MessageList
