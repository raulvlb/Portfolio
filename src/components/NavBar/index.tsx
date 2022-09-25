import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './styles';

let nome:string;
nome = '<Raul />'

function index() {
    return (
        <>
            <NavBar>
                <a href="/#home"><h1>{nome}</h1></a>
                <nav>
                    <ul>
                        <a href="/#home">HOME</a>
                        <a href="/#sobre">SOBRE</a>
                        <a href="/#habilidades">HABILIDADES</a>
                        <a href="/#repos">PROJETOS</a>                    
                        <a href="/#contatos">CONTATO</a>
                    </ul>
                </nav>
            </NavBar>
        </>
    );
}

export default index;
