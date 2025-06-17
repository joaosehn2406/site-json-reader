import React from 'react';
import './ModalCad.css';

const Modal = ({ isOpen, closeModal, deleteInfo, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="overlay" onClick={closeModal}></div>

            <div className="modal">
                {children} {}
                <button onClick={closeModal}>Fechar</button>
                <button onClick={deleteInfo}>Excluir</button>
            </div>
        </>
    );
};

export default Modal;
