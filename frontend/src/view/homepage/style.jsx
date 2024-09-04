import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    `;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3%; /* Espace entre les boutons */
    position: relative;
    `;
    

export const Title = styled.h1` 
    margin-top: 15%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 4em;
    font-family: "BNPooly-Rounded", sans-serif;
    `;

export const SubTitle = styled.h2`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "BNPooly-Rounded", sans-serif;
    font-weight: 100;
    margin-top: 0;
    margin-bottom: 2%;
    `;


export const LoginButton = styled.button`

    border: 2px solid transparent;
    transition: all 0.3s ease;
    font-family: "BNPooly-Rounded", sans-serif;
    width: 10em;
    height: 40px;
    margin-top: 5%;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #9494cc;
    border-radius: 10px;
    font-weight: 400;
    font-size: 1.2em;
    width: 100%;
    max-width: 200px;
    color: #fbebd4;


    &:hover {
        border-color: #9494cc;
        background-color: transparent;
        color: #9494cc;
    } 
    `;

export const RegisterButton = styled.button`


    border: 2px solid transparent;
    transition: all 0.3s ease;

    height: 40px;
    margin-top: 5%;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 10px;
    font-family: "BNPooly-Rounded", sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    width: 100%;
    max-width: 200px;
    color: #9494cc;
    border-color: #9494cc;


    &:hover {
        border-color: transparent;
        background-color: #9494cc;
        color: #fbebd4;
    } 
`;

