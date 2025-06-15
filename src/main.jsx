import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/index.css';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Funcionarios from './pages/Funcionarios.tsx';
import Cadastro from './pages/Cadastro.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);
