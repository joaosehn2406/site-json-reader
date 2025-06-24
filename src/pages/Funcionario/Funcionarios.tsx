import funfu from '../../assets/FuncionarioList.js';
import CardFuncionario from '../../components/CardFuncionario/CardFuncionario.jsx';

function Funcionarios() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'center',
                padding: '50px',
                textDecoration: 'none',
                alignItems: 'center',
            }}
        >
            {funfu.map((func) => (
                <CardFuncionario key={func.id} funcionario={func} />
            ))}
        </div>
    );
}

export default Funcionarios;
