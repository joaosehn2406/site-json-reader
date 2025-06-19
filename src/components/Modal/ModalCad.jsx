import React from 'react';
import './ModalCad.css';

const Modal = ({ isOpen, closeModal, deleteInfo, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="overlay" onClick={closeModal}></div>

            <div className="modal">
                {children} {}
                <button className="bt-fechar" onClick={closeModal}>Fechar</button>
                <button className="bt-excluir" onClick={deleteInfo}>Excluir</button>
            </div>
        </>
    );
};

export default Modal;
