import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './core/styles/index.css'
import App from './App.tsx'

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <App />
  </StrictMode>
)
