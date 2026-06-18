import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    {/*Use hasrouter aca y centralice los routes en la app por que me resulto mas comodo, agregando routes y links en la app las modificaciones son menos engorrosas*/}
    <App />
  </HashRouter>
)
