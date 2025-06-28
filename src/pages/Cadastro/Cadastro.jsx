import React, { useState } from 'react';
import './Cadastro.css';
import Modal from '../../components/Modal/ModalCad.jsx';
import { getUserById, deleteUserById, updateUserById } from '../../services/userService.js';

function Cadastro() {
    const [inputId, setInputId] = useState('');
    const [userData, setUserData] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        email: '',
        departamento: ''
    });
    const [isEditing, setIsEditing] = useState(false);



    const closeModal = () => setIsModalOpen(false);
    const closeEditModal = () => setIsEditModalOpen(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setUserData(null);
        setStatusMessage('Carregando...');
        setStatusType('');


        try {
            const data = await getUserById(inputId);
            setFormData({
                nome: data.nome,
                endereco: data.endereco,
                email: data.email,
                departamento: data.departamento
            });
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

    const handleEdit = async () => {
        setIsLoading(true);
        setStatusMessage('Verificando cadastro para edição...');
        setStatusType('');

        try {
            const data = await getUserById(inputId);
            setUserData(data);
            setFormData({
                nome: data.nome,
                endereco: data.endereco,
                email: data.email,
                departamento: data.departamento
            });
            setIsEditing(true);
            setIsEditModalOpen(true);
            setStatusMessage('');
        } catch (err) {
            setStatusMessage('ID inexistente. Tente novamente.');
            setStatusType('error');
            // interrompe aqui pra não abrir o modal nem seguir em frente
            return;
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdate = async () => {
        setIsLoading(true);
        setStatusMessage('Atualizando...');
        setStatusType('');
        try {
            await updateUserById(inputId, formData);
            setStatusMessage('Cadastro atualizado com sucesso!');
            setStatusType('success');
            // opcional: recarrega view
            const updated = await getUserById(inputId);
            setUserData(updated);
            setFormData({
                nome: updated.nome,
                endereco: updated.endereco,
                email: updated.email,
                departamento: updated.departamento
            });
        } catch (err) {
            setStatusMessage(err.message);
            setStatusType('error');
        } finally {
            setIsLoading(false);
            setIsEditing(false);
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
                        <button
                            type="submit"
                            className="btn-consultar"
                            onClick={handleSubmit}>
                            Consultar
                        </button>
                        <button
                            type="button"
                            className="btn-alterar"
                            onClick={handleEdit}>
                            Alterar
                        </button>
                        <button
                            type="button"
                            className="btn-excluir"
                            onClick={handleDelete}>
                            Excluir
                        </button>
                    </div>
                </form>
            </div>

            <Modal
                isOpen={isEditModalOpen}
                closeModal={closeEditModal}
                deleteInfo={handleDelete}
            >
                <h2>Informações do Cadastro</h2>

                {isLoading && <p>Processando...</p>}

                {!isLoading && userData && (
                    <form className="form-edit">
                        <div className="form-group">
                            <b>ID</b> <span>{userData.id}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="nome"><b>Nome</b></label>
                            <input
                                id="nome"
                                type="text"
                                value={formData.nome}
                                onChange={e => setFormData({ ...formData, nome: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="departamento"><b>Departamento</b></label>
                            <input
                                id="departamento"
                                type="text"
                                value={formData.departamento}
                                onChange={e => setFormData({ ...formData, departamento: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="endereco"><b>Endereço</b></label>
                            <input
                                id="endereco"
                                type="text"
                                value={formData.endereco}
                                onChange={e => setFormData({ ...formData, endereco: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email"><b>Email</b></label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </form>
                )}

                {!isLoading && isEditing && (
                    <div className="actions">
                        <button
                            type="button"
                            className="btn-save"
                            onClick={handleUpdate}
                            disabled={isLoading}
                        >
                            Salvar alterações
                        </button>
                    </div>
                )}

                {statusMessage && (
                    <div className={`status-message ${statusType}`}>
                        {statusMessage}
                    </div>
                )}
            </Modal>

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
