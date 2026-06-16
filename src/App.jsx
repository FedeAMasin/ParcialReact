
import { Routes, Route } from 'react-router-dom'; 
import './App.css'
//Poner rutas para importar componentes en la navegación
//en este archivo deberia coordinar la estructura de la navegacion.
import Inicio from './pages/Inicio.jsx'
//import PostDetailPage from './pages/PostDetailPage'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      {/*<Route path="/post/:id" element={<PostDetailPage />} />*/}
    </Routes>
  )
}

export default App
