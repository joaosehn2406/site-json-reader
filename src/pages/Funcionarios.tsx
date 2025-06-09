import funfu from '../assets/FuncionarioList';
import CardFuncionarios from '../CardFuncionario/CardFuncionario';

function Funcionarios() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'center',
            padding: '50px',
            textDecoration: 'none',
            alignItems: 'center'
        }}>
            {funfu.map((func) => (
                <CardFuncionarios key={func.id} funcionario={func} />
            ))}
        </div>
    );
}

export default Funcionarios;
