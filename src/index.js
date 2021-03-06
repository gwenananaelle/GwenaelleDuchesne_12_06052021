import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import Dashboard from './pages/Dashboard'

//comment the condition below if you want to use the API instead of using the mock in dev environment
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
