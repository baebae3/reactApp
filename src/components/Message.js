const Message = ({ text }) => {
    return (
        <div>
            <div className="position">
                {text.author}
                {text.text}
            </div>
        </div>
    )
}

export default Message
