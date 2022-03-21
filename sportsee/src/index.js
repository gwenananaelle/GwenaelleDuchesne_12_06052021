import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
    }
`

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);