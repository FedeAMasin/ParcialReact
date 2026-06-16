import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes } from "react-router";

import App from './App.jsx'
import NavigationBar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  
    <HashRouter>
      <NavigationBar />
      <App />
      
    </HashRouter>
  
)
