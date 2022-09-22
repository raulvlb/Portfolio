import styled from "styled-components"

export const TecnologyCard = styled.div`
    background-color: #f1faee;
    
    //border-bottom: solid 5px #f1faee; 
    border-radius: 20px;
    text-align: center;
    margin: 20px;
    width: 140px;
    height: 140px;
    transition: all 0.5s ease;
    color: #e63946;
    h4{
        font-size: 0.8rem;
        padding-top: 15px;
    }
    .tecnology-icons{
        width: 50px;
        height: 50px;
        color: #e63946;
        //color: #e5e5e5;
    }
    :hover{
        //border-bottom: solid 5px #e63946; 
        color: #f1faee;
        background-color: #e63946;
        transform: translate(0px, -10%);

        .tecnology-icons{
            color: #f1faee;
        }
    }
`;
