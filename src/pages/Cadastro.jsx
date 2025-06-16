import './Cadastro.css';

function Cadastro() {
    return (
        <main className="home-cadastro">
            <div className="container-cadastro">
                <form className="form-cadastro" onSubmit={(e) => e.preventDefault()}>
                    <label className="label-nome" htmlFor="input-id">
                        Buscar cadastro
                    </label>
                    <input
                        className="input-text"
                        type="text"
                        name="input-id"
                        id="input-id"
                        placeholder="Digite o id desejado"
                    />
                    <button type="submit" className="btn-consultar">
                        Consultar
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Cadastro;
