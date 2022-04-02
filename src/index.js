import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createTheme } from '@mui/material'
import { orange, purple } from '@mui/material/colors'
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1ea3e6',
        },
        secondary: purple,
        text: {
            primary: '#1ea3e6',
        },
    },
    status: {
        danger: orange[500],
    },
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
