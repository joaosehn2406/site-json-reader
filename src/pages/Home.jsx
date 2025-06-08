import React from 'react';
import './Home.css'

function Home() {
    return (
        <main className="main-container">
            <section className="main-content">
                <h1 className="main-title">Conecte sua equipe com eficiência</h1>
                <p>
                    A Nexa é uma solução moderna para empresas que buscam agilidade, organização e controle.
                    Gerencie tarefas, acompanhe a produtividade e mantenha sua equipe sincronizada, tudo em um só lugar.
                </p>

                <ul className="benefits-list">
                    <li>✔️ Controle centralizado de atividades</li>
                    <li>✔️ Interface intuitiva e responsiva</li>
                    <li>✔️ Otimização de tempo e recursos</li>
                    <li>✔️ Funcionarios capacitados</li>
                </ul>

                <button className="cta-main">Comece agora</button>
            </section>
        </main>
    );
}

export default Home;
