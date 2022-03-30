import logo from './logo.svg';
import './App.css';
import Message from './Message';
import React, { useState, useEffect, useRef } from 'react';

function App(props) {
  const [arr, setMessageList] = useState([{text: '', author: ''}]);
  const [inputText, setInputText] = useState('');

  const ref = useRef(null)

  const handleChanger = (event) => {
    setInputText(event.target.value)
  }


  const handleAdd = (event) => {
    let templateObj = {
      text: inputText,
      author: 'Maksim: ',
    }
    setMessageList([...arr, templateObj])
    ref.current.value = ''
  }

  useEffect(() => {
    const botObj = {
      author: 'BOT',
      text: "some text"
    }
    setInterval(() => {
      if (arr.author.includes('Maksim: ')) {
        setMessageList([...arr, botObj])
      }
    }, 1000)
  }, [inputText])

 
  

  return (
    <div className="App">
      <header className="App-header">
        <h4>список сообщений</h4>
        {arr.map(element => (<Message text={element} />))}
        <div>
          <input ref={ref}  placeholder="Введите сообщение" type="text" value={inputText} onChange={handleChanger} />
          <button onClick={handleAdd}>Add message</button>
        </div>
      </header>
      
    </div>
  );
}

export default App;
