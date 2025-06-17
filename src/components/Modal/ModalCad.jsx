import React from 'react';
import './ModalCad.css'; // Estilos do Modal

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

    return (
        <>
            {/* Overlay para escurecer o fundo */}
            <div className="overlay" onClick={closeModal}></div>

            {/* Modal */}
            <div className="modal">
                {children} {/* Exibe o conteúdo passado como filho do Modal */}
                <button onClick={closeModal}>Fechar</button>
            </div>
        </>
    );
};

export default Modal;
