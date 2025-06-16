import './Cadastro.css'

function Cadastro() {
    return (
        <main className="home-cadastro" style={{ paddingTop: '400px' }}>
            <div className="container-cadastro">
                <input
                    type="text"
                    name="input-id"
                    id="input-id"
                    placeholder="Digite o id desejado"
                />
            </div>
        </main>
    );
}

export default Cadastro;