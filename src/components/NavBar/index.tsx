import React from 'react';
import { NavBar } from './styles';

let nome:string;
nome = '<Raul />'

function index() {
    return (
        <>
            <NavBar>
                <h1>{nome}</h1>
                <nav>
                    <ul>
                        <li>HOME</li>
                        <li>SOBRE</li>
                        <li>HABILIDADES</li>
                        <li>PROJETOS</li>
                        <li>CONTATO</li>
                    </ul>
                </nav>
            </NavBar>
        </>
    );
}

export default index;
