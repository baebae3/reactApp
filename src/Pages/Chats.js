import ControlPanel from '../components/ControlPanel'
import MessageList from '../components/MessageList'
import { useParams } from 'react-router-dom'
import ChatList from '../components/ChatList'

const Chats = () => {
    return (
        <div>
            <h4>список сообщений:</h4>
            <div className="wrapper">
                <ChatList />
                <div className="messengerPanel">
                    <MessageList />
                    <ControlPanel />
                </div>
            </div>
        </div>
    )
}

export default Chats
