import React from 'react';
import './Header.css'
import imgempresa from '../../assets/imgempresa.png';
import {Link} from "react-router-dom";

function LogoEmpresa(){
    return (
        <div >
            <Link to="/home">
                <img className="imagem_empresa" src = {imgempresa} alt="Logo da empresa"/>
            </Link>
        </div>
    )
}

export default LogoEmpresa