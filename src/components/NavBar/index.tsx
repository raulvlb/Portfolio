import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './styles';

let nome:string = '<Raul />';

const navLinks = ["home", "sobre", "habilidades", "projetos", "contatos"]


function index() {
    
    function navBarLink(item: string){
        document.getElementById(item)?.scrollIntoView({ behavior: "smooth" })
    }

    return ( 
        <>
            <NavBar>
                <a href="/#home"><h1>{nome}</h1></a>
                <nav>
                    <ul>
                        {navLinks.map(item => {
                            return(
                                <a onClick={() => navBarLink(item)}>{item.toLocaleUpperCase()}</a>
                            )
                        })}
                    </ul>
                </nav>
            </NavBar>
        </>
    );
}

export default index;
