import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './i18n'
import { installGlobalErrorHandlers } from './lib/errorLog'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import App from './App.jsx'

installGlobalErrorHandlers()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
