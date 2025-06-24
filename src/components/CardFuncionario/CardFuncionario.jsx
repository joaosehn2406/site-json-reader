import React from 'react';

function CardFuncionario({ funcionario }) {
    return (
        <div style={{
            width: '250px',
            margin: '20px',
            border: '1px solid #ccc',
            textAlign: 'center',
            justifyContent: 'center',
        }}>
            <div style={{ backgroundColor: 'black', padding: '10px' }}>
                <img src={funcionario.foto} alt={funcionario.nome} />
            </div>
            <div style={{ padding: '10px', fontFamily: 'Arial' }}>
                <p>{funcionario.nome}</p>
                <p>{funcionario.subobjeto.propriedade1}</p>
                <p>{funcionario.subobjeto.propriedade2}</p>
                <div style={{ backgroundColor: 'gray', padding: '5px', fontFamily: 'Verdana' }}>
                    <a href={`mailto:${funcionario.email}`} style={{ color: 'white', textDecoration: 'none' }}>
                        {funcionario.email}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardFuncionario;
