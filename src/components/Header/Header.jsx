import React from 'react';
import LogoEmpresa from "./LogoEmpresa.jsx";
import LiHeader from "./LiHeader.jsx";
import './Header.css';

function Header() {
    return (
        <header className="header-container">
            <LogoEmpresa />
            <LiHeader />
        </header>
    );
}

export default Header;
