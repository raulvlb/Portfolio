import React from 'react';
import { Home } from './styles';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import perfil from '../../assets/imagens/perfil.jpeg'
import { IconContext } from 'react-icons/lib';

function index() {

    function projetosLink(){
        document.getElementById('projetos')?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div id='home'>
            <Home>
                <div>
                    <h1>Olá! Me chamo <span>Raul Barra</span></h1>
                    <h2>E sou <span>Desenvolvedor Front-end</span></h2>
                    <p>Atualmente desenvolvendo aplicações <span>front-end para web</span> 
                        <br/>utilizando tecnologias como <span>React (+frameworks)</span></p>
                    <div className='butons'>
                        <a onClick={() => projetosLink()}><button className='projetos'>Meus Projetos</button></a>
                        <a href="/#sobre"><button className='sobre'>Mais Sobre Mim</button></a>
                    </div>
                </div>
                <div className='perfil-img'>
                    <img src={perfil} alt="" />
                    <div className='gradiente'>
                    </div>
                </div>
                <div className='icons'>
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        <a href={'https://github.com/raulvlb'} target="_blank" style={{ textDecoration: 'none' }}>
                        <IconContext.Provider value={{ className: 'react-icons-github' }}>
                            <AiFillGithub />
                        </IconContext.Provider>
                        </a>

                        <a href={'https://www.linkedin.com/in/raulbarra/'} target="_blank" style={{ textDecoration: 'none' }}>
                        <IconContext.Provider value={{ className: 'react-icons-linkedin' }}>
                            <AiFillLinkedin />
                        </IconContext.Provider>
                        </a>

                        <a href={'https://www.instagram.com/raulvlb/'} target="_blank" style={{ textDecoration: 'none' }}> 
                        <IconContext.Provider value={{ className: 'react-icons-instagram' }}>
                            <AiOutlineInstagram />
                        </IconContext.Provider>
                        </a>        
                    </IconContext.Provider>
                </div>
            </Home>
        </div>
    );
}

export default index;
