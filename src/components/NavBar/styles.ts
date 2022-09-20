import styled from "styled-components"

type Props = {

};

export const NavBar = styled.div<Props>`
    /* @import url('https://fonts.googleapis.com/css2?family=Exo:wght@200;400;600;800&display=swap'); */
    font-family: 'Exo', sans-serif;
    background-color: #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 0px 5% 0px 5%;
    h1{
        color: #e63946;
        margin: 0px;
        padding: 0px;
        font-weight: 800;
    }
    ul{
        display: flex;
    }
    li{
        list-style: none;
        margin: 10px 20px 10px 20px;
        cursor: pointer;    
        color: #212529;
        font-weight: 600;
        border-bottom: dotted 4px #e5e5e5;
        transition: all 0.5s ease;
    }
    li:hover{
        color: #e63946;
        border-bottom: dotted 4px #e63946;
        transform: scale(1.2);
    }   

`;