import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SocialMedia from './components/SocialMedia'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />,
    <SocialMedia/>
  </React.StrictMode>
)
