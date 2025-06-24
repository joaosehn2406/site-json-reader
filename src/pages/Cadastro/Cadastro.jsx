import React, { useState } from 'react';
import './Cadastro.css';
import Modal from '../../components/Modal/ModalCad.jsx';
import { getUserById, deleteUserById } from '../../services/userService.js';

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
        setUserData(null);
        setStatusMessage('Carregando...');
        setStatusType('');
        try {
            const data = await getUserById(inputId);
            setUserData(data);
            setStatusMessage('Cadastro encontrado!');
            setStatusType('success');
        } catch (err) {
            setStatusMessage(err.message);
            setStatusType('error');
        } finally {
            setIsLoading(false);
            setIsModalOpen(true);
        }
    };

    const handleDelete = async () => {
        setIsLoading(true);
        setStatusMessage('Excluindo...');
        setStatusType('');
        try {
            const { status, mensagem } = await deleteUserById(inputId);
            setStatusMessage(mensagem);
            setStatusType(status === 'success' ? 'success' : 'error');
            if (status === 'success') setUserData(null);
        } catch (err) {
            setStatusMessage(err.message);
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
                        id="input-id"
                        type="number"
                        placeholder="Digite o id desejado"
                        value={inputId}
                        onChange={(e) => setInputId(e.target.value)}
                    />
                    <div style={{ display: 'flex', gap: 10 }}>
                        <button type="submit" className="btn-consultar">
                            Consultar
                        </button>
                        <button
                            type="button"
                            className="btn-excluir"
                            onClick={handleDelete}
                        >
                            Excluir
                        </button>
                    </div>
                </form>
            </div>

            <Modal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                deleteInfo={handleDelete}
            >
                <h2>Informações do Cadastro</h2>
                {isLoading ? (
                    <p>Processando...</p>
                ) : userData ? (
                    <>
                        <p>ID: {userData.id}</p>
                        <p>Nome: {userData.nome}</p>
                        <p>Departamento: {userData.departamento}</p>
                        <p>Endereço: {userData.endereco}</p>
                        <p>Email: {userData.email}</p>
                    </>
                ) : null}
                <div
                    style={{
                        marginTop: 16,
                        padding: '8px',
                        borderRadius: 4,
                        backgroundColor: statusType === 'success' ? 'green' : 'red',
                        color: '#fff',
                    }}
                >
                    {statusMessage}
                </div>
            </Modal>
        </main>
    );
}

export default Cadastro;
