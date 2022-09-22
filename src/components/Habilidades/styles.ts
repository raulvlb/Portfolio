import styled from "styled-components"

export const Habilidades = styled.div`
    font-family: 'Exo', sans-serif;
    margin: 0px;
    padding: 5% 5% 5% 5%;
    display: flex;
    justify-content: space-around;
    background-color: #e5e5e5;

    h1{
        font-weight: 600;
        font-size: 3rem;
        color: #212529;
    }

    p{
        font-weight: 400;
        font-size: 1.3rem;
        color: #212529;
    }

    span{
        color: #e63946;
    }

    .cards{
        width: 50vw;
        display: flex;
        flex-wrap: wrap;
    }
`