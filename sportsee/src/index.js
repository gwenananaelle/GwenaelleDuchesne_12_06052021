import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import Dashboard from './components/Dashboard'

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
}

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
    }
`

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="user" element={<App />}>
                <Route path=":id" element={<Dashboard />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
