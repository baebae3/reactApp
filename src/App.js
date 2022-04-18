import './App.css'
import React from 'react'
import Router from './Router/Router'

function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                <React.StrictMode>
                    <Router />
                </React.StrictMode>
            </header>
        </div>
    )
}

export default App
