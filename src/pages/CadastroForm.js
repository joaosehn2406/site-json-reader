// components/CadastroForm.js
import React from 'react';

const CadastroForm = ({ inputId, handleInputChange, handleSubmit }) => {
    return (
        <form className="form-cadastro" onSubmit={handleSubmit}>
            <label className="label-nome" htmlFor="input-id">
                Buscar cadastro
            </label>
            <input
                className="input-text"
                type="number"
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
    );
};

export default CadastroForm;
