import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import NotePad from './(NotePad)/NotePad.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotePad />
  </StrictMode>,
)
