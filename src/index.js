import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CircularProgress, createTheme } from '@mui/material'
import { orange, purple } from '@mui/material/colors'
import { ThemeProvider } from '@emotion/react'
import store, { persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

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
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<CircularProgress />}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
