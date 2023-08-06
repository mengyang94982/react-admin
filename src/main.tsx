import React from 'react'
import ReactDOM from 'react-dom/client'
import { setupAssets } from '@/plugins'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'

setupAssets()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>
)
