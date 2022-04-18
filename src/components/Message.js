import '../App.css'

const Message = ({ text }) => {
    let className = 'blockPosition'
    if (text.author === 'Maksim') {
        className += ' blockPosition__my'
    }
    return (
        <div className={className}>
            <div className="message-style">
                <h3>{text.author}</h3>
                <div className="position">{text.text}</div>
            </div>
        </div>
    )
}

export default Message
