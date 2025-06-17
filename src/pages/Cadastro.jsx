import './Cadastro.css';
import React, { useState } from 'react';
import Modal from '../components/Modal/ModalCad.jsx';

function Cadastro() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputId, setInputId] = useState('');
    const [userData, setUserData] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setStatusMessage('');
        setStatusType('');
    };

    const handleInputChange = (e) => {
        setInputId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);
        setStatusMessage('Carregando...');
        setUserData(null);

        fetch(`https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/${inputId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data != null) {
                    setUserData(data);
                    setStatusMessage('Cadastro encontrado!');
                    setStatusType('success');
                } else {
                    setStatusType('error');
                }
                setIsLoading(false);
                openModal();
            })
            .catch((error) => {
                setStatusMessage('Erro ao buscar dados!');
                setStatusType('error');
                setIsLoading(false);
                openModal();
            });
    };

    return (
        <main className="home-cadastro">
            <div className="container-cadastro">
                <form className="form-cadastro" onSubmit={handleSubmit}>
                    <label className="label-nome" htmlFor="input-id">
                        Buscar cadastro
                    </label>
                    <input
                        className="input-text"
                        type="text"
                        name="input-id"
                        id="input-id"
                        placeholder="Digite o id desejado"
                        value={inputId}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="btn-consultar">
                        Consultar
                    </button>
                </form>
            </div>

            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <h2>Informações do Cadastro</h2>
                {isLoading ? (
                    <p>Carregando...</p>
                ) : userData ? (
                    <>
                        <p>ID: {userData.id}</p>
                        <p>Nome: {userData.nome}</p>
                        <p>Departamento: {userData.departamento}</p>
                        <p>Endereço: {userData.endereco}</p>
                        <p>Email: {userData.email}</p>
                    </>
                ) : (
                    <p>{statusMessage}</p>
                )}

                {statusMessage && (
                    <div style={{ backgroundColor: statusType === 'success' ? 'green' : 'red' }}>
                        <p>{statusMessage}</p>
                    </div>
                )}
            </Modal>
        </main>
    );
}

export default Cadastro;
