import React from 'react';
import { Home } from './styles';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import perfil from '../../assets/imagens/perfil.jpeg'
import { IconContext } from 'react-icons/lib';

function index() {
    return (
        <>
            <Home>
                <div>
                    <h1>Olá! Me chamo <span>Raul Barra</span></h1>
                    <h2>E sou <span>Desenvolvedor Front-end</span></h2>
                    <p>Atualmente desenvolvendo aplicações <span>front-end para web</span> 
                        <br/>utilizando tecnologias como <span>React (+frameworks)</span></p>
                    <div className='butons'>
                        <button className='projetos'>Meus Projetos</button>
                        <button className='sobre'>Mais Sobre Mim</button>
                    </div>
                </div>
                <div className='perfil-img'>
                    <img src={perfil} alt="" />
                    <div className='gradiente'>
                    </div>
                </div>
                <div className='icons'>
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        <IconContext.Provider value={{ className: 'react-icons-github' }}>
                            <AiFillGithub />
                        </IconContext.Provider>

                        <IconContext.Provider value={{ className: 'react-icons-linkedin' }}>
                            <AiFillLinkedin />
                        </IconContext.Provider>

                        <IconContext.Provider value={{ className: 'react-icons-instagram' }}>
                            <AiOutlineInstagram />
                        </IconContext.Provider>        
                    </IconContext.Provider>
                </div>
            </Home>
        </>
    );
}

export default index;
