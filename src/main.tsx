import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './core/styles/index.css'
import Head from './core/components/Head.tsx';
import App from './App.tsx'

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <Head />
    <App />
  </StrictMode>
)
