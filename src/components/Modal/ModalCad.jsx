import React from 'react';
import './ModalCad.css';

function Modal({ isOpen, closeModal, deleteInfo, children }) {
    if (!isOpen) return null;

    return (
        <div id="modal-root">
            <div className="overlay" onClick={closeModal} />
            <div className="modal">
                {children}
                <button className="bt-fechar" onClick={closeModal}>Fechar</button>
                <button className="bt-alterar">Alterar</button>
            </div>
        </div>
    );
}

export default Modal;
