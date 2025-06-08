import { Link } from 'react-router-dom';
import './Header.css';

function LiHeader() {
    return (
        <nav>
            <ul className="ul-container">
                <li><Link to="/home" className="link-home">Home</Link></li>
                <li><Link to="/funcionarios">Funcionários</Link></li>
                <li><a href="#">Sobre</a></li>
            </ul>
            <div className="bt-container">
                <button className="botao-login">Log in</button>
                <button className="botao-cadastro">Register now</button>
            </div>
        </nav>
    );
}

export default LiHeader;
