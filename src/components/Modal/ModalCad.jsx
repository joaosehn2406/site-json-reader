import React from 'react';

const ModalCad = ( { closeModal, children}) => {

    return(
        <>
        <div className="overlay" onClick={closeModal}></div>
            <div className="modal">
                {children} { }
                <button onClick={closeModal}>Fechar</button>
            </div>
        </>
    );
};

