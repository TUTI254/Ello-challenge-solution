import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Providers from './utils/Providers'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
