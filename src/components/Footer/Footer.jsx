import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Nexa. Todos os direitos reservados.</p>
                <p className="nomes-autores">
                    Desenvolvido por <strong>João Pedro</strong>
                </p>
                <div className="footer-links">
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos de Uso</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
