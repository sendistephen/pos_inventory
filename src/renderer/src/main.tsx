import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import App from './App'
import { HashRouter as Router } from 'react-router-dom' // Import HashRouter

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <Router>
        <App />
      </Router>
    </Theme>
  </React.StrictMode>
)
