import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes } from "react-router-dom";
//importamos bootstrap para los colorcitos y todas esos detalles.
// npm install bootstrap para que el import funcione bobis.
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import NavigationBar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  
    <HashRouter>
     
      <App />
      
    </HashRouter>
  
)
