
import { Routes, Route } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import { TemaContext } from './context/TemaContext';
import './App.css'
import Inicio from './pages/Inicio.jsx'
import NuevoPost from './pages/NuevoPost.jsx'
import PaginaDetallePost from './pages/PaginaDetallePost.jsx'
import Navbar from './components/Navbar'

function App() {
  const [tema, setTema] = useState('claro');

  useEffect(() => {
    document.documentElement.className = tema;
  }, [tema]);

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      <>
        <Navbar />
        <div className="container mt-3 strong">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nuevo-post" element={<NuevoPost />} />
            <Route path="/posts/:id" element={<PaginaDetallePost />} />
          </Routes>
        </div>
      </>
    </TemaContext.Provider>
  )
}

export default App
