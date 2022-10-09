import styled from "styled-components"

type Props = {
    
};

export const NavBar = styled.div<Props>`
    font-family: 'Exo', sans-serif;
    background-color: #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 0px 5vw;
    position: fixed;
    width: 100%;
    height: 10%;
    z-index: 9999;
    a{
        text-decoration: none;
    }
    h1{
        color: #e63946;
        margin: 0px;
        padding: 0px;
        font-weight: 800;
    }
    ul{
        display: flex;
        margin: 0px 10vw 0px 0px;
        a{
            list-style: none;
            margin: 10px 20px 10px 20px;
            cursor: pointer;    
            color: #212529;
            font-weight: 600;
            border-bottom: solid 0.1px #e5e5e5;
            transition: transform 0.5s ease;
        }
        a:hover{
            color: #e63946;
            border-bottom: solid 0.1px #e63946;
            transform: scale(1.2);
        }   
    }

`;