import styled from "styled-components"
// color: #e63946; vermelho
// background-color: #f1faee; branco
// background-color: #e5e5e5;; braco escuro

export const RepoHeader = styled.div`
    font-family: 'Exo', sans-serif;
    background-color: #f1faee;
    text-align: center;
    padding-top: 5%;
    h1{
        margin:0px;
    }
    p{
        padding-top: 2%;
        margin: 0px;
    }
    span{
        color: #e63946;
    }
`;

export const RepoCard = styled.div`
    font-family: 'Exo', sans-serif;
    background-color: #e5e5e5;  
    color: #e63946;
    width: 300px;
    height: 200px;
    text-align: center;
    border-radius: 40px;
    padding: 5%;
    transition: all 0.5s ease;
    z-index: 10;
    h1{
        font-size: 1.5rem;
        margin: 0px;
        color: #e63946;
    }
    p{
        color: #212529;
    }
    span{
        color: #e63946;
        font-weight: 600;
    }
    .ver-mais{
        display: flex;
        justify-content: center;
        border-radius: 20px;
        align-items: center;
        margin-top: 20%;
        background-color: #f1faee;
        color: #e63946;  
        transition: all 0.5s ease;
        height: 50px;
    }
    .ver-mais:hover{
        background-color: #e63946;
        color: #f1faee;   
        transform: translate(0px, -10%);
    }
`;

export const RepoSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f1faee;
    padding: 5%;
    button{
        position: absolute;
        padding: 2%;
    }
    .prev{
        margin-right: 80%;
        background-color: #f1faee;
        border: none;
        cursor: pointer;
        color: #e63946;
        transition: all 0.5s ease;
    }
    .next{
        margin-left: 80%;
        background-color: #f1faee;
        border: none;
        cursor: pointer;
        color: #e63946;
        transition: all 0.5s ease;
    }
    .prev:hover{
        transform: scale(1.5);
    }
    .next:hover{
        transform: scale(1.5);
    }
    .prev-icon{
        font-size: 1.5rem;
    }
    .next-icon{
        font-size: 1.5rem;
    }
`;

export const LeftBackRepoCard = styled.div`
    position: absolute;
    font-family: 'Exo', sans-serif;
    margin-right: 400px;
    background-color: #e5e5e5;  
    opacity: 0.5;
    color: #e63946;
    width: 300px;
    height: 200px;
    text-align: center;
    border-radius: 40px;
    padding: 2%;
    transition: all 0.5s ease;
    cursor: pointer;
    h1{
        font-size: 1rem;
        margin: 5% 0px 0px 0px;
        color: #e63946;
    }
    p{
        font-size: .8rem;
        color: #212529;
    }
    span{
        color: #e63946;
        font-weight: 600;
    }
    .ver-mais{
        display: flex;
        justify-content: center;
        border-radius: 20px;
        align-items: center;
        margin-top: 15%;
        background-color: #f1faee;
        color: #e63946;  
        transition: all 0.5s ease;
        height: 50px;
    }
`;

export const RightBackRepoCard = styled.div`
    position: absolute;
    font-family: 'Exo', sans-serif;
    margin-left: 400px;
    background-color: #e5e5e5;  
    opacity: 0.5;
    color: #e63946;
    width: 300px;
    height: 200px;
    text-align: center;
    border-radius: 40px;
    padding: 2%;
    transition: all 0.5s ease;
    cursor: pointer;
    h1{
        font-size: 1rem;
        margin: 5% 0px 0px 0px;
        color: #e63946;
    }
    p{
        font-size: .8rem;
        color: #212529;
    }
    span{
        color: #e63946;
        font-weight: 600;
    }
    .ver-mais{
        display: flex;
        justify-content: center;
        border-radius: 20px;
        align-items: center;
        margin-top: 15%;
        background-color: #f1faee;
        color: #e63946;  
        transition: all 0.5s ease;
        height: 50px;
    }
`;