import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      <Message txt='World!' />
      </header>
      
    </div>
  );
}

export default App;
