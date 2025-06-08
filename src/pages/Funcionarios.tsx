import funfu from '../assets/FuncionarioList';
import CardFuncionarios from '../CardFuncionario/CardFuncionario';

function Funcionarios() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '50px' }}>
            {funfu.map((func) => (
                <CardFuncionarios key={func.id} funcionario={func} />
            ))}
        </div>
    );
}

export default Funcionarios;
