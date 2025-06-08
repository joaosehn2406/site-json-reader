import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Header from './components/Header/Header.jsx'
import Home from "./pages/Home.jsx";
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
      <Home />
      <Footer />
  </StrictMode>,
)
