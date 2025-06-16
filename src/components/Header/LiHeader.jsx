import {Link, useNavigate} from 'react-router-dom';
import './Header.css';

function LiHeader() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cadastro')
    }

    return (
        <nav>
            <ul className="ul-container">
                <li><Link to="/home" className="link-home">Home</Link></li>
                <li><Link to="/funcionarios">Funcionários</Link></li>
                <li><a href="#">Sobre</a></li>
            </ul>
            <div className="bt-container">
                <button className="botao-login">Log in</button>
                <button onClick={handleClick} className="botao-cadastro">Cadastro</button>
            </div>
        </nav>
    );
}

export default LiHeader;
