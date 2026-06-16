
import { Routes, Route } from 'react-router-dom'; 
import './App.css'
//Poner rutas para importar componentes en la navegación
import Inicio from './pages/Inicio.jsx'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  )
}

export default App
