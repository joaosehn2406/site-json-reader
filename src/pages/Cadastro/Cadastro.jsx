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

    const closeModal = () => setIsModalOpen(false);

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
        setStatusMessage('Verificando cadastro...');
        setStatusType('');
        setIsModalOpen(true);

        try {
            await getUserById(inputId);
        } catch (err) {
            setStatusMessage('ID inexistente. Tente novamente.');
            setStatusType('error');
            setIsLoading(false);
            return;
        }


        setStatusMessage('Excluindo...');
        setStatusType('');
        try {
            const { status, mensagem } = await deleteUserById(inputId);
            const ok = String(status).toLowerCase() === 'ok';
            setStatusMessage(mensagem);
            setStatusType(ok ? 'success' : 'error');
            if (ok) setUserData(null);
        } catch (err) {
            setStatusMessage(err.message);
            setStatusType('error');
        } finally {
            setIsLoading(false);
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
                    <div className="botoes-form">
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
                closeModal={closeModal}
                deleteInfo={handleDelete}
            >
                <h2>Informações do Cadastro</h2>

                {isLoading && <p>Processando...</p>}

                {!isLoading && userData && (
                    <>
                        <p><strong>ID:</strong> {userData.id}</p>
                        <p><strong>Nome:</strong> {userData.nome}</p>
                        <p><strong>Departamento:</strong> {userData.departamento}</p>
                        <p><strong>Endereço:</strong> {userData.endereco}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                    </>
                )}

                {statusMessage && (
                    <div className={`status-message ${statusType}`}>
                        {statusMessage}
                    </div>
                )}
            </Modal>
        </main>
    );
}

export default Cadastro;
