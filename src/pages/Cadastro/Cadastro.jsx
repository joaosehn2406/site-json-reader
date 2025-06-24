import React, { useState } from 'react';
import './Cadastro.css';
import Modal from '../../components/Modal/ModalCad.jsx';
import { getUserById } from '../../services/userService.js';

function Cadastro() {
    const [inputId, setInputId] = useState('');
    const [userData, setUserData] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage('Carregando...');
        setUserData(null);

        try {
            const data = await getUserById(inputId);
            if (data) {
                setUserData(data);
                setStatusMessage('Cadastro encontrado!');
                setStatusType('success');
            } else {
                setStatusMessage('Nenhum cadastro encontrado');
                setStatusType('error');
            }
        } catch (err) {
            setStatusMessage('Erro ao buscar dados!');
            setStatusType('error');
        } finally {
            setIsLoading(false);
            setIsModalOpen(true);
        }
    };

    return (
        <main className="home-cadastro">
            <div className="container-cadastro">
                <form className="form-cadastro" onSubmit={handleSubmit}>
                    <label htmlFor="input-id" className="label-nome">
                        Buscar cadastro
                    </label>
                    <input
                        className="input-text"
                        type="number"
                        id="input-id"
                        placeholder="Digite o id desejado"
                        value={inputId}
                        onChange={(e) => setInputId(e.target.value)}
                    />
                    <button type="submit" className="btn-consultar">
                        Consultar
                    </button>
                </form>
            </div>

            <Modal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                deleteInfo={() => {}}
            >
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
                    <div
                        style={{
                            backgroundColor: statusType === 'success' ? 'green' : 'red',
                            padding: '8px',
                            marginTop: '12px',
                            borderRadius: '4px',
                        }}
                    >
                        <p style={{ color: '#fff' }}>{statusMessage}</p>
                    </div>
                )}
            </Modal>
        </main>
    );
}

export default Cadastro;
