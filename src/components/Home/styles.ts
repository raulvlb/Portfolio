import styled from "styled-components"

export const Home = styled.div`
    font-family: 'Exo', sans-serif;
    
    background-color: #f1faee;
    padding: 10% 5% 5% 5%;
    display: flex;
    justify-content: space-around;
    h1{
        color: #212529;
        margin: 0px;
        padding: 0px;
        font-weight: 600;
        font-size: 3rem;
    }
    h2{
        color: #212529;
        margin: 0px;
        padding: 0px;
        font-weight: 400;
        font-size: 2rem;
    }
    p{
        color: #212529;
        margin: 5% 0px 0px 0px;
        padding: 0px;
        font-weight: 400;
        font-size: 1.3rem;
    }
    span{
        color: #e63946;
    }
    .perfil-img{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .gradiente{
        position: absolute;
        width: 380px;
        height: 380px;
        border-radius: 50%;
        background: linear-gradient(to right, #e63946, #f1faee);
        animation: rotate 5s linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(359deg);
        }
    }

    img{
        z-index: 10;
        border-radius: 50%;
        width: 365px;
        height: 365px;
    }
    /* BOTÕES */
    .butons{
        display: flex;
        justify-content: space-around;
        margin-top: 10%;

        button{
            background-color: #f1faee;
            font-family: 'Exo', sans-serif;
            font-size: 1.3rem;
            width: 230px;
            height: 70px;
            border: solid 3px #e63946;
            border-radius: 20px;
            font-weight: 600;
            color: #212529;
            transition: all 0.5s ease;
        }
        button:hover{
            cursor: pointer;
            background-color: #e63946;
            color: #f1faee;
            transform: translate(0px, -10%);
        }
    }

    /* ICONES SOCIAIS */
    .icons{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .react-icons-github{
        font-size: 3rem;
        color: #495057;
        transition: all 0.5s ease;
    }
    .react-icons-github:hover {
        cursor: pointer;
        color: #e63946;
        transform: scale(1.3);
    }
    .react-icons-linkedin{
        margin: 50% 0px 50% 0px;
        font-size: 3rem;
        color: #495057;
        transition: all 0.5s ease;
    }
    .react-icons-linkedin:hover {
        cursor: pointer;
        color: #e63946;
        transform: scale(1.3);
    }
    .react-icons-instagram{
        font-size: 3rem;
        color: #495057;
        transition: all 0.5s ease;
    }
    .react-icons-instagram:hover {
        cursor: pointer;
        color: #e63946;
        transform: scale(1.3);
    }
`;