import ControlPanel from '../components/ControlPanel'
import MessageList from '../components/MessageList'
import { useParams } from 'react-router-dom'
import ChatList from '../components/ChatList'

const Chats = ({ chats, addMessage, deleteChat }) => {
    return (
        <div>
            <h4>список сообщений:</h4>
            <div className="wrapper">
                <ChatList chats={chats} deleteChat={deleteChat} />
                <div className="messengerPanel">
                    <MessageList chats={chats} />
                    <ControlPanel addMessage={addMessage} />
                </div>
            </div>
        </div>
    )
}

export default Chats
