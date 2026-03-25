import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { Saludo } from './components/Saludo.jsx'
import {Padre} from './components/Padre.jsx'
import { Contador } from './components/Contador.jsx'
import { Efecto } from './components/Efecto.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saludo nombre="Isaac" apellido="Tiguilá" edad={18} />
    <hr />
  
    <Padre />
    <hr />
    
    <Contador />
    <hr />

    <Efecto />
  </StrictMode>,
)
