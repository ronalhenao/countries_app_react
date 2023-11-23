import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CountriesContextProvider } from "./Context"
import { BrowserRouter } from 'react-router-dom';

import App from './CountriesApp.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <BrowserRouter>
        <App />
      </BrowserRouter>

  </React.StrictMode>,
)
