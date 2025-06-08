import React from 'react';
import './Header.css';

function LiHeader() {
    return (
        <nav>
            <ul className="ul-container">
                <li>
                    Home
                </li>
                <li >
                    Funcionarios &#9662;
                </li>
                <li>
                    Sobre
                </li>
            </ul>
            <div className="bt-container">
                <button className="botao-login">Log in</button>
                <button className="botao-cadastro">Register now</button>
            </div>
        </nav>
    );
}

export default LiHeader;
